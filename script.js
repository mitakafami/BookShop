fetch('./assets/JSON.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let content = data;
        
            content.map(function(apiData) {
    
                var wrap =document.createElement("main")
                
                var container = document.createElement("div")
                container.classList= "main-div"
                wrap.appendChild(container);
                document.getElementsByTagName("body")[0].appendChild(container);

                var div = document.createElement("div")
                div.id = "container-book";
                div.className = "Container-book";
                container.appendChild(div)

                var leftDiv = document.createElement("div")
                leftDiv.className = "left-side";
                div.appendChild(leftDiv)

                var img = document.createElement("img")
                img.className = "book-image";
                img.src = `${apiData.imageLink}`;
                leftDiv.appendChild(img);

                var rightDiv = document.createElement("div")
                rightDiv.className = "right-side"
                div.appendChild(rightDiv)
    
                var bookTitle = document.createElement("h2")
                bookTitle.className = "book-title";
                rightDiv.appendChild(bookTitle)
                bookTitle.innerHTML = `${apiData.title}`;
    
                var h3 = document.createElement("h3");
                h3.className = "h3";
                rightDiv.appendChild(h3);
                h3.innerHTML = `${apiData.author}`
    
                var h4 = document.createElement("h4");
                h4.className = "h4"
                h4.id = "h4"
                rightDiv.appendChild(h4)
                h4.innerHTML = ` ${apiData.price}` + " $"

                var buttonDiv = document.createElement("div");
                buttonDiv.style = "button-div";
                rightDiv.appendChild(buttonDiv);
            

                var showMore = document.createElement("button");
                showMore.className = "show-more";
                showMore.textContent = "Show-more ";
                buttonDiv.appendChild(showMore);
            
                var addCartBtn = document.createElement("button");
                addCartBtn.className = "add-to-cart";
                addCartBtn.textContent = "add to cart";
                buttonDiv.appendChild(addCartBtn);

   });
   
});
