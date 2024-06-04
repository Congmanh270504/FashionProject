const newsLetter = document.querySelector("#news-letter");
const form = newsLetter.querySelector(".form");
const emailInput = form.querySelector("input");
const subBtn = form.querySelector("button");
subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    if (emailValue !== '') {
        sessionStorage.setItem("newsLetter-email", emailValue);
    }
    window.location.href="/master/Sign/signUp.html";
});
