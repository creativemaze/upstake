"use strict";
$(document).ready(function(){
	$('.boxslide').slick({
		slidesToShow: 4,
		autoplay: true,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 1025,
			settings: {
			slidesToShow: 1,
			dots: true,
			fade: true
		}
						
	},
	]
	});
});