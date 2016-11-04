$( document ).ready(function() {

  var size = $(window).height() - $('.nav').height();
  $('#full-height').height(size);

  $('.75-height').height(size * 0.5);



});
