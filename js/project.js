var projectSwiper = new Swiper('.projectSwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  $('.detail-btn').on('click', function () {
    $('#detail-board-area').addClass('show');

    const project = $(this).data('project');

    if (project === 'baseball') {
      $('.baseball-board').addClass('show');
    } else if (project === 'motors') {
      $('.motors-board').addClass('show');
    } else {
      $('.museum-board').addClass('show');
    }

    $('#detail-board-area').on('click', function (e) {
      if ($(e.target).closest('.detail-board-frame').length) {
        return;
      } else {
        $(this).removeClass('show');
        $('.detail-board-frame').removeClass('show')
      }
    })

    $('.xcircle').on('click', function () {
      $('#detail-board-area').removeClass('show');
      $('.detail-board-frame').removeClass('show');
    })
  })
})