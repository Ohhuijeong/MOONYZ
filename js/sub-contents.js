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
    },
    {
        img: "img/contents/contents07.png",
        text: "꼭꼭 숨어라 머리카락 보일라"
    },
    {
        img: "img/contents/contents08.png",
        text: "⭐나랑 별보러 갈래⭐"
    },
    {
        img: "img/contents/contents09.png",
        text: "갑자기 부풀어 오른 뽁이 @.@!"
    },
    {
        img: "img/contents/contents10.png",
        text: "하나 둘 셋 무니~~~(찰칵📸)"
    },
    {
        img: "img/contents/contents11.png",
        text: "관심의 표현은 장난뿐! 범동이 바라기 찡이"
    },
    {
        img: "img/contents/contents12.png",
        text: "오늘의 조개 쇼핑💰"
    },
    {
        img: "img/contents/contents13.png",
        text: "파도동의 재치꾼 범동"
    },
    {
        img: "img/contents/contents14.png",
        text: "마을 이장 고미를 축하하는 파도동 주민들"
    },
    {
        img: "img/contents/contents15.png",
        text: "커피 한 잔의 여유"
    },
    {
        img: "img/contents/contents16.png",
        text: "파도동의 아름다운 밤이야이야~🌙"
    },
    {
        img: "img/contents/contents17.png",
        text: "뽁이 분 노 대 폭 발🔥"
    },
    {
        img: "img/contents/contents18.png",
        text: "얼음나라에서 새 친구가 와요~"
    },
    {
        img: "img/contents/contents19.png",
        text: "파도동에 찾아온 첫 위기🚨"
    },
    {
        img: "img/contents/contents20.png",
        text: "혼자놀기 장인 펭구"
    },
    {
        img: "img/contents/contents21.png",
        text: "세상 모르게 세월이 지나가네"
    }

];


/* 카드 클릭 */
cardItems.forEach((card) => {

    card.addEventListener("click", (e) => {
        e.preventDefault();
        const modalNumber = card.dataset.modal;
        const data = contentslData[modalNumber - 1];

        //기존 이미지 숨기기
        modalImg.style.opacity = "0";

        //이미지와 텍스트 변경
        modalImg.src = data.img;
        modalText.textContent = data.text;

        // 새 이미지가 로드되면 보여주기
        modalImg.onload = () => {
            modalImg.style.opacity = "1";
        };

        //모달 열기
        modal.classList.add("active");

        /* 모달 열릴 때 뒤쪽 스크롤 막기 */
        document.body.style.overflow = "hidden";
    });

});


/* 어두운 배경 클릭 */
modalBg.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});