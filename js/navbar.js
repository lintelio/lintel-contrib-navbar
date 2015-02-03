;(function($) {
  'use strict';

  var Navbar = function(element, options) {
    this.$navbar = $(element);
    this.visible = false;
    this.collapsed = true;
    this.options = options || {};
    this.options.onInit.call(this, this.$navbar, this.options);

    if (this.options.scroll) {
      this.trackScroll();
    }
  };

  Navbar.prototype.show = function(relatedTarget) {
    if (this.visible) { return; }

    // Show event
    var showEvent = $.Event('show.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(showEvent);

    // Allow event to be prevented
    if (showEvent.isDefaultPrevented()) { return; }

    // Show navbar
    this.visible = true;
    this.$navbar.addClass('active');

    // Shown event
    var shownEvent = $.Event('shown.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(shownEvent);
  };

  Navbar.prototype.hide = function(relatedTarget) {
    if (!this.visible) { return; }

    // Hide event
    var hideEvent = $.Event('hide.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(hideEvent);

    // Allow event to be prevented
    if (hideEvent.isDefaultPrevented()) { return; }

    // Hide navbar
    this.visible = false;
    this.$navbar.removeClass('active');

    // Hidden event
    var hiddenEvent = $.Event('hidden.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(hiddenEvent);
  };

  Navbar.prototype.toggle = function(relatedTarget) {
    return this.visible ? this.hide(relatedTarget) : this.show(relatedTarget);
  };

  Navbar.prototype.expand = function(relatedTarget) {
    if (!this.collapsed) { return; }

    // Expand event
    var expandEvent = $.Event('expand.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(expandEvent);

    // Allow event to be prevented
    if (expandEvent.isDefaultPrevented()) { return; }

    // Show navbar
    this.collapsed = false;

    this.$navbar.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
      $('body').removeClass('has-navbar-expanding');
      this.$navbar.off(e);
    }.bind(this));

    $('body').addClass('has-navbar-expanded has-navbar-expanding').removeClass('has-navbar-collapsed');

    // Expanded event
    var expandedEvent = $.Event('expanded.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(expandedEvent);
  };

  Navbar.prototype.collapse = function(relatedTarget) {
    if (this.collapsed) { return; }

    // Collapse event
    var collapseEvent = $.Event('collapse.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(collapseEvent);

    // Allow event to be prevented
    if (collapseEvent.isDefaultPrevented()) { return; }

    // Hide navbar
    this.collapsed = true;

    this.$navbar.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
      $('body').removeClass('has-navbar-collapsing');
      this.$navbar.off(e);
    }.bind(this));

    $('body').addClass('has-navbar-collapsed has-navbar-collapsing').removeClass('has-navbar-expanded');

    // Collapsed event
    var collapsedEvent = $.Event('collapsed.lt.navbar', {
      relatedTarget: relatedTarget
    });
    this.$navbar.trigger(collapsedEvent);
  };

  Navbar.prototype.toggleCollapse = function(relatedTarget) {
    return this.collapsed ? this.expand(relatedTarget) : this.collapse(relatedTarget);
  };

  Navbar.prototype.trackScroll = function() {
    // Remove event listener if called again
    if (this.scrollListener) {
      return this.scrollListener();
    }

    // Vars
    var didScroll;
    var lastScrollTop = 0;

    // On scroll, let the interval function know the user has scrolled
    this.scrollListener = $(window).scroll(function() {
      didScroll = true;
    });

    // Run hasScrolled() and reset didScroll status
    setInterval(function() {
      if (didScroll) {
        lastScrollTop = this.hasScrolled(lastScrollTop);
        didScroll = false;
      }
    }.bind(this), this.options.scrollTimeout);
  };

  Navbar.prototype.hasScrolled = function(lastScrollTop) {
    var scrollTop = $(window).scrollTop();

    if (Math.abs(lastScrollTop - scrollTop) <= this.options.scrollDelta) {
      return;
    }

    // If current position > last position AND scrolled past navbar...
    if (scrollTop > lastScrollTop && scrollTop > this.$navbar.outerHeight()) {
      this.$navbar.removeClass('navbar-down').addClass('navbar-up');
    }
    else {
      if (scrollTop + $(window).height() < $(document).height()) {
        this.$navbar.removeClass('navbar-up').addClass('navbar-down');
      }
    }

    return scrollTop;
  };

  // Define jQuery plugin
  function Plugin(method, relatedTarget) {
    return this.each(function() {
      var $navbar = $(this);
      var settings = $.extend({}, Plugin.defaults, $navbar.data(), typeof method === 'object' && method);

      var data = $navbar.data('lt.navbar');

      if (!data) {
        data = new Navbar(this, settings);
        $navbar.data('lt.navbar', data);
      }

      if (typeof method === 'string') {
        data[method](relatedTarget);
      }
      else if (settings.toggle) {
        data.toggle(relatedTarget);
      }
      else if (settings.toggleCollapse) {
        data.toggleCollapse(relatedTarget);
      }
    });
  }

  Plugin.defaults = {
    onInit: function() {},
    scroll: false,
    scrollDelta: 5,
    scrollTimeout: 100,
    toggle: false,
    toggleCollapse: false
  };

  $.fn.navbar = Plugin;

  $(document).on('click.lt.navbar.data-attr.toggle', '[data-toggle="navbar"]', function (e) {
    var $trigger = $(this);
    var $target = $trigger.closest('.navbar');
    if ($trigger.data().target) {
      $target = $($trigger.data().target);
    }
    else if ($target.hasClass('navbar-mobile')) {
      if ($target.siblings('.navbar').length > 0) {
        $target = $target.siblings('.navbar');
      }
    }
    var options = $target.data('lt.navbar') ? 'toggle' : $.extend($target.data(), $trigger.data(), {
      toggle: true
    });

    if ($trigger.is('a')) {
      e.preventDefault();
    }

    $target.navbar(options, $trigger[0]);
  });

  $(document).on('click.lt.navbar.data-attr.collapse', '[data-toggle="navbar-collapse"]', function (e) {
    var $trigger = $(this);
    var $target = $trigger.closest('.navbar');
    var options = $target.data('lt.navbar') ? 'toggleCollapse' : $.extend($target.data(), $trigger.data(), {
      toggle: false,
      toggleCollapse: true
    });

    if ($trigger.is('a')) {
      e.preventDefault();
    }

    $target.navbar(options, $trigger[0]);
  });

})(jQuery);
