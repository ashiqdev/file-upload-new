var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 60,
  mobile: false,
  live: true,
  scrollContainer: null,
});
wow.init();

var DEMOSIGNS = DEMOSIGNS || {};

// USE STRICT
('use strict');

DEMOSIGNS.initialize = {
  init: function () {
    DEMOSIGNS.initialize.countup();
    DEMOSIGNS.initialize.sectionBackground();
  },

  //   section background
  sectionBackground: function () {
    // Section Background Image
    $('[data-bg-image]').each(function () {
      var img = $(this).data('bg-image');
      $(this).css({
        backgroundImage: 'url(' + img + ')',
      });
    });
  },

  countup: function () {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: '',
    };

    var counteEl = $('[data-counter]');

    if (counteEl) {
      counteEl.each(function () {
        var val = $(this).data('counter');

        var countup = new CountUp(this, 0, val, 0, 2.5, options);
        $(this).appear(
          function () {
            countup.start();
          },
          {
            accX: 0,
            accY: 0,
          }
        );
      });
    }
  },
};

DEMOSIGNS.documentOnReady = {
  init: function () {
    DEMOSIGNS.initialize.init();
  },
};

// Initialize Functions
$(document).ready(DEMOSIGNS.documentOnReady.init);
