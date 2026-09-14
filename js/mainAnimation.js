/* ============================================
          콘텐츠 애니메이션 Javascript
============================================ */
// GSAP 플러그인 등록
gsap.registerPlugin(MotionPathPlugin);


/* ==========================================================
                            콘텐츠
============================================================ */
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


/* ===================================================================
                                팝업
=================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.main-popup');
  const crab = document.querySelector('.crab');

  let animId = null;
  let progress = 0;   // 0 ~ 1 (0: 원래 자리, 1: 목적지)
  let direction = 1;  // 1: 목적지로 이동, -1: 원래 자리로 복귀
  let path = null;

  // 두 요소의 현재 화면상 실제 위치를 기준으로 이동 경로(베지어 곡선) 계산
  function calculatePath() {
    const crabRect = crab.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    const crabCenter = {
      x: crabRect.left + crabRect.width / 2,
      y: crabRect.top + crabRect.height / 1.45
    };
    const popupCenter = {
        x: popupRect.left + popupRect.width * 0.15,
        y: popupRect.bottom - popupRect.height * 0.025
    };

    const dx = popupCenter.x - crabCenter.x;
    const dy = popupCenter.y - crabCenter.y;

    /* S코스 휘어진 정도 */
    const curveStrength = 0.8;

    const curveStrength1 = curveStrength * 2.5;
    const curveStrength2 = curveStrength * 0.1;

    const perpX = -dy;
    const perpY = dx;

    // S자의 세로 길이(키)를 조절하는 배율. 1보다 커지면 위로 더 솟구쳤다가 내려오는 느낌이 강해짐
    const verticalStretch = 1.5;

    return [
      { x: 0, y: 0 },
      {
        x: dx * 0.3 + perpX * curveStrength1,
        y: (dy * 0.3 + perpY * curveStrength1) * verticalStretch
      },
      {
        x: dx * 0.7 - perpX * curveStrength2,
        y: (dy * 0.7 - perpY * curveStrength2) * verticalStretch
      },
      { x: dx, y: dy }
    ];
  }

  function cubicBezier(t, p0, p1, p2, p3) {
    const mt = 1 - t;
    const x = mt*mt*mt*p0.x + 3*mt*mt*t*p1.x + 3*mt*t*t*p2.x + t*t*t*p3.x;
    const y = mt*mt*mt*p0.y + 3*mt*mt*t*p1.y + 3*mt*t*t*p2.y + t*t*t*p3.y;
    return { x, y };
  }

  function easeInOutSine(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  }

  function animate() {
    progress += 0.01 * direction;
    progress = Math.max(0, Math.min(1, progress));

    const eased = easeInOutSine(progress);
    const pos = cubicBezier(eased, path[0], path[1], path[2], path[3]);

    crab.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

    const stillGoing = (direction === 1 && progress < 1) || (direction === -1 && progress > 0);
    animId = stillGoing ? requestAnimationFrame(animate) : null;
  }

  popup.addEventListener('mouseenter', () => {
    if (!path) path = calculatePath();
    direction = 1;
    if (!animId) animId = requestAnimationFrame(animate);
  });

  popup.addEventListener('mouseleave', () => {
    direction = -1;
    if (!animId) animId = requestAnimationFrame(animate);
  });
});