//side-gnb
const closeBtn = document.querySelector('#closeBtn');
const gnbBtn = document.querySelector('#gnbBtn');
const gnb = document.querySelector('.gnb')

gnbBtn.addEventListener('click', () => {
    gnb.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    gnb.classList.remove('active')
})

document.addEventListener('click', (event) => {
    if (gnbBtn.contains(event.target) || gnb.contains(event.target)) {
        return;
    } else {
        gnb.classList.remove('active')
    }
})