var stickyHeaderTop = 0;

$(document).ready(function() {
  stickyHeaderTop = $('.header').offset().top;

  $('.contact-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'https://woodcraft.hu/priv-attila',
        type: 'post',
        data: $('.contact-form').serialize(),
        success: function() {

        }
    });
  });

  $("body").scroll(function(e) {
    var val = $("body").scrollTop();
    if (val > stickyHeaderTop + 50) {
      $('.header').addClass('headerSelect');
      $('.logo-main').addClass('logo-main-hide');
      $('.logo').addClass('logo-show');
    } else {
      $('.header').removeClass('headerSelect');
      $('.logo-main').removeClass('logo-main-hide');
      $('.logo').removeClass('logo-show');
    }

    if ($("#about").offset().top <= 0) {
      $('body, html').css({
        'background-image': 'url("img/bg2.jpg")'
      });
    } else {
      $('body, html').css({
        'background-image': 'url("img/bg.jpg")'
      });
    }

    $('.scroll').each(function(index) {
      if ($(this).offset().top - $(this).parent().parent().height() <= 30) {
        $(this).addClass('animated');
        $(this).addClass('zoomInDown');
        $(this).fadeTo(0, 1, function() {});
      } else {
        $(this).removeClass($(this).attr('anim'));
        $(this).removeClass($(this).attr('anim'));
        $(this).fadeTo(0, 0, function() {});
      }
    });
  });

  $("button").click(function() {
    var btn = $(this);
    var bb = btn.attr('href');
    var value = bb.split(' ');
    var s = 0;
    $.each(value, function(i, val) {
      s += $(val).height();
    });
    console.log(s);
    $('body').animate({
      scrollTop: s}, 'slow');
  });
});
