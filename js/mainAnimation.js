/* ============================================
          콘텐츠 애니메이션 Javascript
============================================ */
// GSAP 플러그인 등록
gsap.registerPlugin(MotionPathPlugin);

const mailCard = document.querySelector('.main-contents');
const targetMail = document.querySelector('.contents-mail');

// 좌표 데이터
const pathPoints = [
    { x: 0, y: 0 },
    { x: -40, y: -10 },
    { x: -150, y: -50 },
    { x: -100, y: -126 },
    { x: -40, y: -90 },
    { x: -55, y: -40 },
    { x: -95, y: 40 }
];

// 1. 타임라인 생성 (paused: true 설정으로 Hover 시 제어)
const mailTimeline = gsap.timeline({
    paused: true,
    repeat: -1
});

// 2. 곡선 이동 애니메이션 (2초 동안 진행)
mailTimeline.to(targetMail, {
    duration: 2,
    ease: "power1.inOut",
    motionPath: {
        path: pathPoints,
        type: "cubic",
        curviness: 1.5
    }
}, 0);

// 3. 회전 및 크기 변화 (0 ~ 2초)
mailTimeline
    .to(targetMail, { opacity: 0, scale: 0.5, rotation: 0, duration: 0 }, 0)
    .to(targetMail, { opacity: 0.8, scale: 0.7, rotation: -5, duration: 0.32 }, 0)
    .to(targetMail, { opacity: 1, scale: 1, rotation: -7, duration: 0.64 }, 0.32)
    .to(targetMail, { rotation: 5, duration: 0.32 }, 0.96)
    .to(targetMail, { rotation: 10, duration: 0.32 }, 1.28)
    .to(targetMail, { opacity: 1, rotation: -2, duration: 0.36 }, 1.60)
    .to(targetMail, { opacity: 1, rotation: 2, duration: 0.04 }, 1.96);

// 4. 마지막 위치 도착 후 제어
mailTimeline.to(targetMail, {
    opacity: 0,
    duration: 0.5,        // 0.5초 동안 서서히 사라짐
    delay: 1,            // 마지막 위치에서 1초 동안 대기 후 시작
    ease: "power1.out"
});

// 5. Hover 이벤트 제어
mailCard.addEventListener('mouseenter', () => {
    mailTimeline.restart(); // 마우스 올리면 시작
});

mailCard.addEventListener('mouseleave', () => {
    mailTimeline.pause(0);  // 마우스 나가면 정지 및 초기화
});