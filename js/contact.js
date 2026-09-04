/* 창 열리기 */
$(".question-card").mouseenter(function () {
    $(".answer").slideUp();
    $(this).css("height", "auto");
    $(this).find(".answer").slideToggle();
});
/* 창 닫히기 */
$(".question-card").mouseleave(function () {
    $(".answer").slideUp();
    $(this).animate({
        height: '163px'
    })
});