// @codekit-prepend "jquery.easing.1.3.js";
// @codekit-prepend "velocity.min.js";
// @codekit-prepend "hammer.min.js";
// @codekit-prepend "jquery.hammer.js";
// @codekit-prepend "collapsible.js";
// @codekit-prepend "dropdown.js";
// @codekit-prepend "leanModal.js";
// @codekit-prepend "materialbox.js";
// @codekit-prepend "parallax.js";
// @codekit-prepend "tabs.js";
// @codekit-prepend "tooltip.js";
// @codekit-prepend "waves.js";
// @codekit-prepend "toasts.js";
// @codekit-prepend "sideNav.js";
// @codekit-prepend "scrollspy.js";
// @codekit-prepend "forms.js";
// @codekit-prepend "slider.js";
// @codekit-prepend "date_picker/picker.js";
// @codekit-prepend "date_picker/picker.date.js";


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

$( document ).ready(function() {

  var size = $(window).height() - $('.nav').height();
  $('#full-height').height(size);

  $('.75-height').height(size * 0.5);



});
