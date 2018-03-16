(function(window, document, $, undefined) {
  $(function() {

    $('#fullpage').fullpage({
      anchors: ['1st-page', '2nd-page', '3rd-page', '4th-page', '5th-page', '6th-page'],
      navigation: true,
      avigationPosition: 'right',
      afterLoad: function(anchorLink, index) {
        var $section = $(this);

        if (index === 1) {
          $section
            .find('.section__img')
            .addClass('animated')
            .addClass('slideInLeft')
            .show();

          $section
            .find('.section__logo')
            .addClass('animated')
            .addClass('slideInRight')
            .show();
        } else {
          $section
            .find('.section__text')
            .addClass('animated')
            .addClass('swing')
            .show();

          $section
            .find('.section__box')
            .addClass('animated')
            .addClass('bounceInDown')
            .show();

          $section
            .find('.section__cake')
            .addClass('animated')
            .addClass('lightSpeedIn')
            .show();
        }
      },
      onLeave: function(index, nextIndex, direction) {
        var $section = $(this);

        if (index == 1) {
          $section
            .find('.section__img')
            .removeClass('animated')
            .removeClass('slideInLeft')
            .fadeOut();

          $section
            .find('.section__logo')
            .removeClass('animated')
            .removeClass('slideInRight')
            .fadeOut();
        } else {
          $section
            .find('.section__text')
            .removeClass('animated')
            .removeClass('swing')
            .fadeOut();

          $section
            .find('.section__box')
            .removeClass('animated')
            .removeClass('bounceInDown')
            .fadeOut();

          $section
            .find('.section__cake')
            .removeClass('animated')
            .removeClass('lightSpeedIn')
            .fadeOut();
        }
      }
    });

  });
})(window, document, jQuery);