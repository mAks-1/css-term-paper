let cartList = document.querySelector(".cart-list");
let count = 0;

cartList.addEventListener("click",()=>{
    if(count == 0){
        document.querySelector(".cart").style.display = 'block';
        count++;
    }else{
        document.querySelector(".cart").style.display = 'none';
        count--;
    }

})


let cart;

window.addEventListener("load", (e)=>{
    cart = document.querySelectorAll(".cart-img");
    for(let i = 0; i < cart.length; i++){
        cart[i].addEventListener("click", addToCart);

        function addToCart(e){
            let cartElement = document.querySelector("#" + e.target.id)
            let createElement = document.querySelector('.cart').append(cartElement.cloneNode(true));

            // localStorage.setItem(`cart`, document.querySelector('.cart').innerHTML);
            // console.log(localStorage.getItem(`cart`))
        }
    }
})


// function saveFunc(){
    // document.querySelector('.cart').innerHTML = localStorage.getItem(`cart`);
    // console.log(localStorage.getItem(`cart`))
// }


let url = window.location.href;
if((url.indexOf('http://localhost:63342/css-advance-term-paper/rings-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/rings-list.html') != -1)){
    for(let i = 0; i < ringsArr.length; i++){
        const elem = ringsArr[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/earrings-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/earrings-list.html') != -1)){
    for(let i = 0; i < earrings.length; i++){
        const elem = earrings[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/pendants-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/pendants-list.html') != -1)){
    for(let i = 0; i < pendants.length; i++){
        const elem = pendants[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/cufflinks-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/cufflinks-list.html') != -1)){
    for(let i = 0; i < cufflinks.length; i++){
        const elem = cufflinks[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/bracelets-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/bracelets-list.html') != -1)){
    for(let i = 0; i < bracelets.length; i++){
        const elem = bracelets[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/wrist-watch-list.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/wrist-watch-list.html') != -1)){
    for(let i = 0; i < wristWatch.length; i++){
        const elem = wristWatch[i];
        let catalog = new Products(elem.image, elem.price, elem.brand, elem.type);
        catalog.createProductBlock(block);
    }
}else if((url.indexOf('http://localhost:63342/css-advance-term-paper/product-catalog.html') != -1) || (url.indexOf('https://maks-1.github.io/css-term-paper/product-catalog.html') != -1)){
    for(let i = 0; i < wristWatch.length; i++){
        const elem1 = wristWatch[i];
        const elem2 = bracelets[i];
        const elem3 = cufflinks[i];
        const elem4 = pendants[i];
        const elem5 = earrings[i];
        const elem6 = ringsArr[i];

        let catalog1 = new Products(elem1.image, elem1.price, elem1.brand, elem1.type);
        catalog1.createProductBlock(block);

        let catalog2 = new Products(elem2.image, elem2.price, elem2.brand, elem2.type);
        catalog2.createProductBlock(block);

        let catalog3 = new Products(elem3.image, elem3.price, elem3.brand, elem3.type);
        catalog3.createProductBlock(block);

        let catalog4 = new Products(elem4.image, elem4.price, elem4.brand, elem4.type);
        catalog4.createProductBlock(block);

        let catalog5 = new Products(elem5.image, elem5.price, elem5.brand, elem5.type);
        catalog5.createProductBlock(block);

        let catalog6 = new Products(elem6.image, elem6.price, elem6.brand, elem6.type);
        catalog6.createProductBlock(block);
    }
}