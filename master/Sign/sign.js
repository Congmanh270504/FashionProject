const eyes = document.querySelector(".fa-regular.fa-eye");
const eyeSlash = document.querySelector(".fa-regular.fa-eye-slash");
const password = document.querySelector("#password");
eyes.addEventListener("click", () => {
    password.type = "text";
    eyes.classList.add("hidden");
    eyeSlash.classList.remove("hidden");
})
eyeSlash.addEventListener("click", () => {
    password.type = "password";
    eyes.classList.remove("hidden");
    eyeSlash.classList.add("hidden");
})