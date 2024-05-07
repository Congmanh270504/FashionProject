const mainImg = document.querySelector('#main-img .product');
const cart = document.querySelector(".cart");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const optionSize = document.querySelector("select#optionSize");
const quantity = document.querySelector("#quantity")
cart.addEventListener('click', () => {
    var currentSession = JSON.parse(localStorage.getItem("cart")) || { cart: [] };
    currentSession.cart.push({
        img: mainImg.src,
        productName: productName.textContent,
        price: price.textContent.replace("$", ""),
        options: {
            size: optionSize.value,
            color: null,
        },
        quantity: parseInt(quantity.value)
    });
    localStorage.setItem("cart", JSON.stringify(currentSession));
})