;(function($) {
  'use strict';

  $(document).on('click', '.temp-toggle', function() {
    console.log('hii');

    if ($('body').hasClass('has-navbar-collapsed')) {
      $('.has-navbar-collapsed').addClass('has-navbar-expanded has-navbar-expanding').removeClass('has-navbar-collapsed');
      setTimeout(function() {
        $('body').removeClass('has-navbar-expanding');
      }, 500);
    }
    else {
      $('.has-navbar-expanded').addClass('has-navbar-collapsed has-navbar-collapsing').removeClass('has-navbar-expanded');
      setTimeout(function() {
        $('body').removeClass('has-navbar-collapsing');
      }, 500);
    }
  });

})(jQuery);
