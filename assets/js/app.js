var lodash = require('lodash');

$(function() {
   changeSlideBg(); // onload

   setTimeout(function(){
      $(".js_slide").addClass("with-transition");
   }, 3000);

   $(document).on('scroll', _.throttle(() => {
      changeSlideBg();
   }, 300));

   function changeSlideBg() {
      var pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();
      var middleScrollTop = $(window).height() / 2 + $(window).scrollTop();
      var $slides = $(".js_slide-container");
      var slideNum = null;
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
   }

   $(".js_slide__arrow--left").click(function(e) {
      e.preventDefault();
      var $slideCont = $(this).closest(".js_slide-container");
      var slideContCurrent = parseFloat($slideCont.attr('data-slide'));
      $slideCont.attr('data-slide', slideContCurrent - 1);
   });

   $(".js_slide__arrow--right").click(function(e) {
      e.preventDefault();
      var $slideCont = $(this).closest(".js_slide-container");
      var slideContCurrent = parseFloat($slideCont.attr('data-slide'));
      $slideCont.attr('data-slide', slideContCurrent + 1);
   });
});


// slide to section functionality
$('a[href*="#"]:not([href="#"])').click(function() {
 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   if (target.length) {
     $('html, body').animate({
       scrollTop: target.offset().top
     }, 500);
     return false;
   }
 }
});
