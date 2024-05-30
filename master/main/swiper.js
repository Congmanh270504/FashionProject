const mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
    direction: "horizontal",
    spaceBetween: 0,
})