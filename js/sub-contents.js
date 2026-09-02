const cardItems = document.querySelectorAll(".card-item");

const modal = document.querySelector("#contentsModal");
const modalBg = document.querySelector(".modal-bg");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");



/* 모달 데이터 */
const contentslData = [
    {
        img: "img/contents/contents01.png",
        text: "파도동의 쉐프 꾸미!"
    },

    {
        img: "img/contents/contents02.png",
        text: "꼭꼭 숨어라 머리카락 보일라🎶"
    },

    {
        img: "img/contents/contents03.png", text: "설렘을 안고 러브레터를 전하는 꾸미💝"
    },

    {
        img: "img/contents/contents04.png",
        text: "내가 만든 모래성을 소개할게"
    },

    {
        img: "img/contents/contents05.png",
        text: "MOONYZ Assemble !!"
    },

    {
        img: "img/contents/contents06.png",
        text: "오늘의 빅매치 부기vs펭구 달리기 시합!"
    }

];


/* 카드 클릭 */
cardItems.forEach((card) => {

    card.addEventListener("click", (event) => {
        event.preventDefault();
        const modalNumber = card.dataset.modal;
        const data = contentslData[modalNumber - 1];

        modalImg.src = data.img;
        modalText.textContent = data.text;

        modal.classList.add("active");

        /* 모달 열릴 때 뒤쪽 스크롤 막기 */
        document.body.style.overflow = "hidden";
    });

});


/* 어두운 배경 클릭 */
modalBg.addEventListener("click", () => {

    contentsModal.classList.remove("active");

    document.body.style.overflow = "";

});