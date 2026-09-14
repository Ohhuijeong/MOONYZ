/* === popup category === */

const categoryBtns =
    document.querySelectorAll(".category-btn");

const popupSlides =
    document.querySelectorAll(".popup-slide");

const popupSlideSection =
    document.querySelector(".popup-slide-section");

const currentPopupList =
    document.querySelector(".current-popup-list");

    /* === popup swiper === */

const popupSwiper = new Swiper(".swiper-area", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 24,

    loop: false,
    grabCursor: true,

    slidesOffsetBefore: 240,
    slidesOffsetAfter: 240,
});


/* === 첫 화면 : 3번째 카드 중앙 === */

popupSwiper.update();

const thirdSlide = popupSlides[2];

const thirdCenter =
    thirdSlide.offsetLeft +
    thirdSlide.offsetWidth / 2;

const screenCenter =
    popupSwiper.width / 2;

popupSwiper.setTranslate(-(thirdCenter - screenCenter));

/* === 처음 화면 지그재그 === */

let count = 0;

popupSlides.forEach((slide) => {

    if (count % 2 === 0) {
        slide.classList.add("down");
    } else {
        slide.classList.add("up");
    }

    count++;

});


/* === category click === */

categoryBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        /* active 버튼 초기화 */
        categoryBtns.forEach((button) => {
            button.classList.remove("active");
        });

        btn.classList.add("active");


        /* 클릭한 버튼 값 */
        const filter = btn.dataset.filter;


        /* === 팝업중 === */

        if (filter === "current") {

            popupSlideSection.style.display = "none";

            currentPopupList.classList.add("active");

            return;
        }


        /* === 전체 / 지난 팝업 === */

        currentPopupList.classList.remove("active");

        popupSlideSection.style.display = "block";


        /* === 슬라이드 필터 === */

        popupSlides.forEach((slide) => {

            const category = slide.dataset.category;


            /* 전체 */
            if (filter === "all") {

                slide.classList.remove("is-hidden");

            }


            /* 지난 팝업 */
            else if (filter === "past") {

                if (category === "past") {

                    slide.classList.remove("is-hidden");

                } else {

                    slide.classList.add("is-hidden");

                }

            }

        });


        /* === 지그재그 다시 설정 === */

        let count = 0;

        popupSlides.forEach((slide) => {

            slide.classList.remove("down", "up");

            if (!slide.classList.contains("is-hidden")) {

                if (count % 2 === 0) {

                    slide.classList.add("down");

                } else {

                    slide.classList.add("up");

                }

                count++;

            }

        });


        /* Swiper 다시 계산 */

        popupSwiper.update();


        /* === 슬라이드 위치 === */

        if (filter === "all") {

    popupSlideSection.classList.remove("past-mode");

    popupSwiper.params.centeredSlides = false;
    popupSwiper.params.slidesOffsetBefore = 240;
    popupSwiper.params.slidesOffsetAfter = 240;

    popupSwiper.update();


    /* 3번째 카드 중앙 */

    const thirdSlide = popupSlides[2];

    const center =
        (popupSwiper.width / 2) -
        (thirdSlide.offsetWidth / 2);

    const thirdPosition = thirdSlide.offsetLeft;

    popupSwiper.setTranslate(-(thirdPosition - center));

}
else if (filter === "past") {

    popupSlideSection.classList.add("past-mode");

    popupSwiper.params.centeredSlides = false;
    popupSwiper.params.slidesOffsetBefore = 240;
    popupSwiper.params.slidesOffsetAfter = 240;

    popupSwiper.update();

    popupSwiper.slideTo(0, 0);

}

    });

});


/* === event swiper === */

const eventSwiper = new Swiper(".event-swiper", {

    slidesPerView: 1,

    spaceBetween: 20,

    loop: true,

    speed: 600,


    navigation: {

        nextEl: ".event-swiper .swiper-button-next",

        prevEl: ".event-swiper .swiper-button-prev",

    },


    pagination: {

        el: ".event-swiper .swiper-pagination",

        clickable: true,

    },

});