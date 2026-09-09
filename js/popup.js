/* === popup swiper === */

const popupSwiper = new Swiper(".swiper-area", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,

    initialSlide: 2,

    loop: false,
    grabCursor: true,
});


/* === popup category === */

const categoryBtns =
    document.querySelectorAll(".category-btn");

const popupSlides =
    document.querySelectorAll(".popup-slide");

const popupSlideSection =
    document.querySelector(".popup-slide-section");

const currentPopupList =
    document.querySelector(".current-popup-list");


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

            popupSwiper.params.centeredSlides = true;
            popupSwiper.update();

            popupSwiper.slideTo(2);

        }
        else if (filter === "past") {

            popupSlideSection.classList.add("past-mode");

            popupSwiper.params.centeredSlides = false;
            popupSwiper.update();

            popupSwiper.slideTo(0);

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