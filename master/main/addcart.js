const cart = document.querySelector(".cart");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const optionSize = document.querySelector("select#optionSize");
const quantity = document.querySelector("#quantity");
const color = document.querySelector("#color");


cart.addEventListener('click', () => {
    var smallimg = document.querySelector('.small-img-grp:not(.hidden):not(.small-img-grp-model) .samm-img-col img.small-img');
    const grpModel = document.querySelector(".small-img-grp-model:not(.hidden)");
    let colorBtn = document.querySelector(".color i.bordercolor");
    const check = /c([a-zA-Z]*)/g;
    var currentSession = JSON.parse(localStorage.getItem("cart")) || { cart: [] };
    currentSession.cart.push({
        // img: smallimg[0].src,
        img: grpModel !== null && smallimg === null ? document.querySelector('.small-img-grp.hidden .samm-img-col img.small-img').src : smallimg.src,
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
