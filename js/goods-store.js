//main-slide swiper
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

var charactersSwiper = new Swiper('.charactersSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,
});
