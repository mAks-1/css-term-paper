let block = document.querySelector(".products-list");
let counter = 0;

class Products{
    constructor(image, price, brand, type) {
        this.image = image;
        this.price = price;
        this.brand = brand;
        this.type = type;
        this.div = null;
    }

    createProductBlock(block){
        this.div = document.createElement("div");
        this.div.classList.add("product-block");
        this.div.id = 'i' + counter;

        let img = document.createElement('img');
        img.classList.add("product-image")
        img.src = this.image;

        let p = document.createElement("p");
        p.innerHTML = this.type;
        p.classList.add("type");

        let productBrand = document.createElement("p");
        productBrand.innerHTML = this.brand;
        productBrand.classList.add("brand");

        let productPrice = document.createElement("p");
        productPrice.innerHTML = this.price + '&#8372';
        productPrice.classList.add("price");

        let cart = document.createElement("img");
        cart.classList.add("cart-img");
        cart.src = "img/add-to-cart.png";
        cart.id = 'i' + counter;

        this.div.append(img);
        this.div.append(p);
        this.div.append(productBrand);
        this.div.append(productPrice);
        this.div.append(cart);


        block.append(this.div)
        counter++;
    }
};