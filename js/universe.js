const scrollArea = document.querySelector('.horizontal-scroll');

scrollArea.addEventListener('wheel', (e) => {
    e.preventDefault();

    scrollArea.scrollLeft += e.deltaY;
}, { passive: false });