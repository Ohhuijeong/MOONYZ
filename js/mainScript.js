const mainGnbs = document.querySelectorAll('.main-gnb');

mainGnbs.forEach((mainGnb) => {
    const gnbHover = mainGnb.querySelector('.gnb-hover')

    mainGnb.addEventListener('mouseenter', () => {
        gnbHover.classList.add('active')
    })

    mainGnb.addEventListener('mouseleave', () => {
        gnbHover.classList.remove('active')
    })
});