$('.module').hover(
  function() {
    $('.content', this).stop(true, true).slideDown(400);
  },
  function() {
    $('.content', this).stop().slideUp(400);
  }
);
