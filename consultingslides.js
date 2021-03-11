"use strict";
$(document).ready(function(){
	$('.blog_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		speed: 1000,
		pauseOnHover: true,
		pauseOnFocus: false
		
	});
});

$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 800,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});