

$(document).ready(function()
{
  $('#scrollTip').hide();
  $('#scrollTip').delay(2000).fadeIn(2000);
});


function showDiv()
{
  $('#nav').fadeIn(0);
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var h = $(window).height();

    if (scroll > h / 2.5)
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
      $('#nav-container').addClass('topped-nav');

      //$('#nav').fadeOut();

    }



});
