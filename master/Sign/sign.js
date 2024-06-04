const eyes = document.querySelectorAll(".fa-regular.fa-eye");
const eyeSlashes = document.querySelectorAll(".fa-regular.fa-eye-slash");
const passwords = document.querySelectorAll(".show");
eyes.forEach((eye, index) => {
    eye.addEventListener("click", () => {
        passwords[index].type = "text";
        eye.classList.add("hidden");
        eyeSlashes[index].classList.remove("hidden");
    })
});
eyeSlashes.forEach((eyeSlash, index) => {
    eyeSlash.addEventListener("click", () => {
        passwords[index].type = "password";
        eyes[index].classList.remove("hidden");
        eyeSlash.classList.add("hidden");
    })
});
