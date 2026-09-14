/* === POPUP CATEGORY==== */

const categoryBtns =
    document.querySelectorAll(".category-btn");

const popupSlideSection =
    document.querySelector(".popup-slide-section");

const currentPopupList =
    document.querySelector(".current-popup-list");

const popupWrapper =
    document.querySelector(".swiper-area .swiper-wrapper");


/* ===원본 팝업 카드 저장=== */
const originalPopupSlides =
    [...document.querySelectorAll(".popup-slide")].map((slide) => {
        return slide.cloneNode(true);
    });

let popupSwiper;


/* ===지그재그 배치=== */

function setZigzag() {

    const popupSlides =
        popupWrapper.querySelectorAll(".popup-slide");

    popupSlides.forEach((slide, index) => {

        slide.classList.remove("down", "up");

        if (index % 2 === 0) {
            slide.classList.add("down");
        } else {
            slide.classList.add("up");
        }
    });
}


/* ===LOOP에 필요한 슬라이드 복제=== */

function cloneLoopSlides() {

    const popupSlides =
        [...popupWrapper.querySelectorAll(".popup-slide")];
    popupSlides.forEach((slide) => {

        const clone =
            slide.cloneNode(true);
        popupWrapper.appendChild(clone);
    });
}


/* ===카테고리별 카드 출력=== */

function renderPopupSlides(filter) {
    let slides;

    /* 전체 */
    if (filter === "all") {
        slides = originalPopupSlides;
    }

    /* 지난 팝업 */
    else if (filter === "past") {
        slides = originalPopupSlides.filter((slide) => {
            return slide.dataset.category === "past";
        });
    }

    /* 기존 카드 삭제 */
    popupWrapper.innerHTML = "";

    /* 필요한 카드만 출력 */
    slides.forEach((slide) => {
        popupWrapper.appendChild(
            slide.cloneNode(true)
        );

    });

    cloneLoopSlides();
    setZigzag();


}


/* ===POPUP SWIPER 생성=== */
function createPopupSwiper(filter) {
    if (popupSwiper) {
        popupSwiper.destroy(true, true);
        popupSwiper = null;
    }
    /* 카테고리에 맞는 카드 출력 */
    renderPopupSlides(filter);

    /* ===전체=== */
    if (filter === "all") {
        popupSwiper = new Swiper(".swiper-area", {
            slidesPerView: "auto",
            slidesPerGroup: 1,
            spaceBetween: 24,

            centeredSlides: true,
            loop: true,

            initialSlide: 2,
        });
    }



    /* ===지난 팝업=== */

    else if (filter === "past") {

        popupSwiper = new Swiper(".swiper-area", {

            slidesPerView: "auto",

            slidesPerGroup: 1,

            spaceBetween: 24,

            initialSlide: 0,

            slidesOffsetBefore: 340,

            /* 무한 반복 */
            loop: true,
        });
    }
}


/* ===CATEGORY CLICK=== */
categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach((button) => {
            button.classList.remove("active");
        });

        btn.classList.add("active");

        const filter =
            btn.dataset.filter;

        if (filter === "current") {
            if (
                popupSwiper &&
                popupSwiper.autoplay
            ) {
                popupSwiper.autoplay.stop();
            }

            popupSlideSection.style.display = "none";

            /* 현재 진행 팝업 상세 보이기 */
            currentPopupList.classList.add("active");
            return;
        }

        /* ===전체 / 지난 팝업=== */
        /* 현재 팝업 상세 숨기기 */
        currentPopupList.classList.remove("active");

        /* swiper 보이기 */
        popupSlideSection.style.display = "block";

        /*
            해당 카테고리에 맞게
            swiper 다시 생성
        */
        createPopupSwiper(filter);
    });

});


/* ===첫 화면=== */
createPopupSwiper("all");


/* ===EVENT SWIPER=== */
const eventSwiper = new Swiper(".event-swiper", {

    /* 한 화면에 하나 */
    slidesPerView: 1,

    spaceBetween: 20,

    loop: true,

    speed: 1000,

    navigation: {
        nextEl:
            ".event-swiper .swiper-button-next",
        prevEl:
            ".event-swiper .swiper-button-prev",
    },

    /* 페이지네이션 */
    pagination: {
        el:
            ".event-swiper .swiper-pagination",
        clickable: true,
    },

});