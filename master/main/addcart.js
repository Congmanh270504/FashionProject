var smallimg = document.querySelectorAll('.samm-img-col img.small-img');
const cart = document.querySelector(".cart");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const optionSize = document.querySelector("select#optionSize");
const quantity = document.querySelector("#quantity");
const color=document.querySelectorAll(".color i");


cart.addEventListener('click', () => {
    var currentSession = JSON.parse(localStorage.getItem("cart")) || { cart: [] };
    currentSession.cart.push({
        img:smallimg[0].src,
        productName: productName.textContent,
        options: {
            size: optionSize.value,
            color: getColor()
           
        },
        price: price.textContent.replace("$", ""),
        quantity: parseInt(quantity.value)
    });
    localStorage.setItem("cart", JSON.stringify(currentSession));
})