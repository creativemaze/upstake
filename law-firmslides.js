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
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 1025,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});