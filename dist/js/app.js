const menuPageContentHTML = document.querySelector(".menu__page__content");
let products = [];

const addDataToHTML = () => {
    // read data
    if (products.length > 0){
        // if there is data
        products.forEach((product) => {
            //if there is data, continue in making a new div >:)
            let newProduct = document.createElement("div");
            //retrieves product ID from products.json
            newProduct.dataset.id = product.id;
            //classname of every newly made div from line 10
            newProduct.classList.add("menu__page__content__item");
            newProduct.classList.add("active");
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="menu__page__content__text">
                  <h4>${product.name}</h4>
                  <h3>${product.price}</h3>
                  <p>${product.desc}</p>
                </div>
                <a href="" class="btn bg--primary"><span>ADD TO CART</span></a>
            `;
            menuPageContentHTML.appendChild(newProduct); 
            //hi adi how you been sexy
        })
    }
}


const initApp = () => {
    // get products
    fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
            products = data;
            addDataToHTML();
        })
}

initApp();