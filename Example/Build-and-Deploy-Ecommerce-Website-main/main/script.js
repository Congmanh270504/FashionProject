// Script for navigation bar
console.log(window.innerWidth);
console.log(window.innerHeight);

const scrollbutton = document.getElementById("scollbutton");
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
window.onscroll = () => {
    scroll();
};
function scroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollbutton.style.display = "block";
    }
    else {
        scrollbutton.style.display = "none";
    }
}
function scollToTop() {

    window.scrollTo(0, 0);

}