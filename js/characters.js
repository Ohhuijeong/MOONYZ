/* 캐릭터 움직이기 */
document.querySelectorAll('.characters-area').forEach(function (area) {
    const character = area.querySelector('.character');
    if (!character) return;

    area.addEventListener('mouseenter', function () {
        character.classList.add('waddle');
    });

    area.addEventListener('mouseleave', function () {
        character.classList.remove('waddle');
    });
});

/* ======================================
   캐릭터 모달 데이터
====================================== */
const characters = [
    {
        name: "고미",
        image: 'img/characters/profile_web/profile01.png'
    },

    {
        name: "찡이",
        image: 'img/characters/profile_web/profile02.png'
    },

    {
        name: "부기",
        image: 'img/characters/profile_web/profile03.png'
    },

    {
        name: "꾸미",
        image: 'img/characters/profile_web/profile04.png'
    },

    {
        name: "펭구",
        image: 'img/characters/profile_web/profile05.png'
    },

    {
        name: "벼리",
        image: 'img/characters/profile_web/profile06.png'
    },

    {
        name: "범동",
        image: 'img/characters/profile_web/profile07.png'
    },

    {
        name: "모리",
        image: 'img/characters/profile_web/profile08.png'
    },

    {
        name: "뽁이",
        image: 'img/characters/profile_web/profile09.png'
    },

    {
        name: "해둥",
        image: 'img/characters/profile_web/profile10.png'
    },
];

/* 모달 html요소 변수생성 */
const modalModal = document.querySelector('.modal-modal');
const modal = document.querySelector('.modal-image');
const modalCloseBtn = document.querySelector('.modal .close-btn');

/* 캐릭터 클릭 */
const characterButtons = document.querySelectorAll('.profile-frame');
characterButtons.forEach((button) => {
    button.addEventListener('click', showModal);
});

/* 캐릭터 상세보기 */
function showModal(event) {
    event.preventDefault();
    /* 클릭한 캐릭터 */
    const button = event.currentTarget;
    /* data-id는 문자열이므로 숫자로 변경 */
    const id = Number(button.dataset.id);
    /* id가 일치하는 캐릭터 찾기 */
    const character = characters[id - 1];
    /* 캐릭터 이미지 출력 */
    modal.innerHTML = ` 
        <img src="${character.image}" alt="${character.name}"> 
    `;
    /* 모달 열기 */
    modalModal.classList.add('show');
}

/* 모달 닫기 */
modalCloseBtn.addEventListener('click', function () {
    modalModal.classList.remove('show');
});

/* 모달 바깥쪽 클릭 시 닫기 */
modalModal.addEventListener('click', function (event) {
    if (event.target === modalModal) {
        modalModal.classList.remove('show');
    }
});