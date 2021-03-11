"use strict";
$(document).ready(function(){
	$('.slickslide').slick({
		slidesToShow: 3,
		autoplay: true,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 1,
			dots: true,
			fade: true
		}
	},
	]
	});
	
});

$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,	
	});
	
});