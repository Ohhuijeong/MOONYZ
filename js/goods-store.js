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

const charSize = 200;
const requiredGap = charSize * 0.1;

var charactersSwiper = new Swiper('.charactersSwiper', {
    slidesPerView: 5.8,
    centeredSlides: true,

    spaceBetween: requiredGap,
    roundLengths: true,

    loop: true,
    speed: 500,

    navigation: {
        nextEl: ".characters-next",
        prevEl: ".characters-prev",
    },
});

document.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        e.preventDefault();
    }
});

//product-list
$(document).ready(function() {
    $('.like-btn').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('on')

        if ($(this).hasClass('on')) {
            $(this).find('img').attr('src', 'img/icon/like-hover.png')
        } else {
            $(this).find('img').attr('src', 'img/icon/like.png');
        }
    })
})
