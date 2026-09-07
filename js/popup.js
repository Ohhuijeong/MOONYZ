/* =========================
   popup swiper
========================= */

const popupSwiper = new Swiper(".swiper-area", {

    slidesPerView: "auto",

    centeredSlides: true,

    spaceBetween: 30,

    loop: false,

    grabCursor: true,

});


/* =========================
   popup category
========================= */

const categoryBtns =
    document.querySelectorAll(".category-btn");

const popupSlides =
    document.querySelectorAll(".popup-slide");

const popupSlideSection =
    document.querySelector(".popup-slide-section");

const currentPopupList =
    document.querySelector(".current-popup-list");


categoryBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        /* -------------------------
           active 버튼 초기화
        ------------------------- */

        categoryBtns.forEach((button) => {
            button.classList.remove("active");
        });

        btn.classList.add("active");


        /* 클릭한 버튼 값 */
        const filter = btn.dataset.filter;


        /* =========================
           팝업중
        ========================= */

        if (filter === "current") {

            // 기존 swiper 숨기기
            popupSlideSection.style.display = "none";

            // 현재 팝업 상세 보여주기
            currentPopupList.classList.add("active");

            return;
        }


        /* =========================
           전체 / 지난 팝업
        ========================= */

        // 상세 영역 숨기기
        currentPopupList.classList.remove("active");

        // swiper 다시 보여주기
        popupSlideSection.style.display = "block";


        /* 슬라이드 필터 */
        popupSlides.forEach((slide) => {

            const category =
                slide.dataset.category;


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


        /* Swiper가 display 변경을 다시 계산 */
        popupSwiper.update();

        popupSwiper.slideTo(0);

    });

});


/* =========================
   event swiper
========================= */

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