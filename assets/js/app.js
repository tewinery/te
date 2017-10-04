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
      var $slides = $(".js_slide");
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
