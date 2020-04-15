$(document).ready(function(){
	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  autoplay: true,
	  slidesToShow: 1
	});
});
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
speed: 500,
offset:86
});

