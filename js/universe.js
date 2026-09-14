const scrollArea = document.querySelector('.horizontal-scroll');

const mobile = window.matchMedia('(max-width: 640px)');

scrollArea.addEventListener('wheel', (e) => {
    // 640px 이하에서는 기본 세로 스크롤
    if (mobile.matches) {
        return;
    }

    // 640px 초과에서는 가로 스크롤
    e.preventDefault();
    scrollArea.scrollLeft += e.deltaY;
}, { passive: false });