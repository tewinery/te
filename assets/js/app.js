var lodash = require('lodash');

$(function() {
   $(document).on('scroll', _.throttle(() => {
      var pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();
      var middleScrollTop = $(window).height() / 2 + $(window).scrollTop();
      //console.log(middleScrollTop);
      var $slides = $(".js_slide");
      //console.log($slides);
      slideNum = null;
      var i = 0;

      $slides.each(function( index ) {
         bottom = $(this).offset().top + $(this).outerHeight();
         console.log("bottom", bottom, "middleScrollTop", middleScrollTop);

         if (bottom >= middleScrollTop) {
            slideNum = i;
            console.log(bottom);
            return false;
         }

         i++;
      });

      $slides.addClass("is-hidden");
      $slides.eq(slideNum).removeClass("is-hidden");

      console.log(slideNum);
   }, 300));
});
