(function(window, document, $, undefined) {
  $(function() {

    $('#fullpage').fullpage({
      anchors: ['1st-page', '2nd-page', '3rd-page', '4th-page', '5th-page', '6th-page'],
      navigation: true,
      avigationPosition: 'right',
      responsiveWidth: 320,
      responsiveHeight: 400,
      afterResponsive: function(isResponsive) {

      }
    });

  });
})(window, document, jQuery);