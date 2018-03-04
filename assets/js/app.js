$(document).ready(function(){
  $('.button-collapse').sideNav({
    menuWidth: 170,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });
  $('.parallax').parallax();
  $('.rotator').smoove({
    offset:'40%'
  });
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
    $('a[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 1000);
          return false;
        }
      }
    });
  });

  var year = document.getElementById('year')
  copyright = new Date();
  update = copyright.getFullYear();
  year.innerHTML = update;
});