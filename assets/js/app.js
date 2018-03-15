$(document).ready(function(){
  $(".p2").typed({
    strings: ["CYNTHIA", "FRONTEND", "DEVELOPER", "GAMER"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
  });
  $('.parallax').parallax();
  $('.rotator').smoove({
    offset:'40%'
  });

  $('.button-collapse').sideNav();
  $('.scrollspy').scrollSpy();

  $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(100);
		} else {
			$('.ir-arriba').slideUp(100);
		}
  });
  
  $(function(){
    // smooth scroll to div
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});