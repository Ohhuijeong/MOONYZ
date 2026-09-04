$(".question-card").mouseenter(function () {
    $(".answer").slideUp();
    $(this).css("height", "auto");
    $(this).find(".answer").slideToggle();
});

$(".question-card").mouseleave(function () {
    $(".answer").slideUp();
    $(this).animate({
        height: '163px'
    })
});