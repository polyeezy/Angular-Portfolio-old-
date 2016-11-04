$( document ).ready(function() {

  var size = $(window).height() - $('.nav').height();
  $('#full-height').height(size);

  $('#75-height').height(size * 0.5);


});


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var h = $(window).height();

    if (scroll > h / 4)
    {
      $('#NameFromLeft').removeClass('slideInLeft').addClass('slideOutRight');
      $('#DescFromRight').removeClass('slideInRight').addClass('slideOutLeft');

      $('#nav-container').removeClass('topped-nav');

      $('#nav').removeClass('topped-nav').fadeIn();
      $('#scrollTip').fadeOut(2000);

    }
    else {
      $('#NameFromLeft').removeClass('slideOutRight').addClass('slideInLeft');
      $('#DescFromRight').removeClass('slideOutLeft').addClass('slideInRight');
      $('#scrollTip').fadeIn(2000);

    //  $('#nav').fadeOut();

    }
});
