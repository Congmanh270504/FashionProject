console.log(window.innerWidth);
console.log(window.innerHeight);

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const icon = document.querySelectorAll(".icon svg");
const white=document.querySelectorAll(".banner-box button.white");

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



icon[0].addEventListener("click", () => {
    window.location.href = 'https://www.facebook.com/?locale=vi_VN';
});
icon[1].addEventListener("click", () => {
    window.location.href = 'https://www.instagram.com/';
});
icon[2].addEventListener("click", () => {
    window.location.href = 'https://www.tiktok.com/vi-VN/';
});
icon[3].addEventListener("click", () => {
    window.location.href = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwig6a6Kwb6GAxUzDXsHHe9vB9gYABAAGgJ0bQ&ase=2&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf3_oyuCTjT5Kk0gCNINg22-dAALheRKGs86Wg2AZ52fnq5SWLe8-78aAq6SEALw_wcB&ohost=www.google.com&cid=CAESVuD2PnmiTkc7wC08zuUOrqmjcjojVX2DuLEgr746z6OEY9XmvptehHBKMLLLp4he2XqrwPzcLUuirWZTOR1BhUnk3v9i_nTsWM-o_LaoRYm8pAnKdpge&sig=AOD64_1Iht4VRa0A_y1v7zpDYG5oRLOeAg&q&nis=4&adurl&ved=2ahUKEwjg-aiKwb6GAxVRmq8BHcxHDEAQ0Qx6BAgGEAE';
});


white[0].addEventListener("click", () => {
    window.location.href = '/master/shop/shop.html';
});
white[1].addEventListener("click", () => {
    window.location.href = '/master/shop/shop2.html';
});