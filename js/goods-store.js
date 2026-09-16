//main-slide swiper
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    speed: 1000,

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

    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: false,
            loop: false
        },

        641: {
            slidesPerView: 5.8,
            spaceBetween: requiredGap,
            centeredSlides: true,
            loop: true
        }
    }
});

document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && !link.closest('h1')) {
        e.preventDefault();
    }
});

//product-list
$(document).ready(function () {
    $('.like-btn').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('on')

        if ($(this).hasClass('on')) {
            $(this).find('img').attr('src', 'img/icon/like-hover.png')
        } else {
            $(this).find('img').attr('src', 'img/icon/like.png');
        }
    })
})
