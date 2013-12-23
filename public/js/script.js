function home() {
  $.get('home.html', function(data) {
    var iframe = $('#content').contents().find('html').get(0);
    iframe.innerHTML = data;
  });
}

$(document).ready(home());

$('.module').hover(
  function() {
    $('.content', this).stop(true, true).slideDown(400);
  },
  function() {
    $('.content', this).stop().slideUp(400);
  }
);

function loadContent(link) {
  $.get('modules/' + link, function(data) {
    $('#content').contents().find('body').html(data);
  });
}
