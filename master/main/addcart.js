const cart = document.querySelector(".cart");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const optionSize = document.querySelector("select#optionSize");
const quantity = document.querySelector("#quantity");
const color = document.querySelector("#color");


cart.addEventListener('click', () => {
    var smallimg = document.querySelectorAll('.small-img-grp:not(.hidden) .samm-img-col img.small-img');
    let colorBtn = document.querySelector(".color i.bordercolor");
    const check = /c([a-zA-Z]*)/g;
    var currentSession = JSON.parse(localStorage.getItem("cart")) || { cart: [] };
    currentSession.cart.push({
        img: smallimg[0].src,
        productName: productName.textContent,
        options: {
            size: optionSize.value,
            color: color ? color.value : colorBtn ? colorBtn.className.split(" ").filter((str) => check.test(str))[0].substring(1) : ""
        },
        price: price.textContent.replace("$", ""),
        quantity: parseInt(quantity.value)
    });
    localStorage.setItem("cart", JSON.stringify(currentSession));
})
