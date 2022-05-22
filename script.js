const container = document.createElement('div');
container.classList.add('container');
document.getElementsByTagName('body')[0].prepend(container);

fetch('../assets/JSON.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        data.forEach((element) => {
      const bookWrapper = document.createElement('div');
      bookWrapper.classList.add('container');
      container.appendChild(bookWrapper);

      const img = document.createElement('img');
      img.src = element.imageLink;
      bookWrapper.appendChild(img);

      const author = document.createElement('p');
      author.innerText = element.author;
      bookWrapper.appendChild(author);

      const title = document.createElement('h2');
      title.innerText = element.title;
      bookWrapper.appendChild(title);

      const price = document.createElement('p');
      price.innerText = `Price: $${element.price}`;
      bookWrapper.appendChild(price);

      const description = document.createElement('p');
      description.innerText = element.description;
      bookWrapper.appendChild(description);
    });
  });
        });

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('remove-button')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click'. removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('input-cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChange)
    }

    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('finish-buying')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked (event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('book-title')[0].innerText
    var price = shopItem.getElementsByClassName('book-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('book-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item has already been added to the cart')
            return
        }
    }
    var cartRowContents = `
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('input-cart-quantity')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row)')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElements = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-full-price')[0].innerText = '$' + total
}
