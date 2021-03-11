"use strict";
$(document).ready(function(){
	$('.square_slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		fade: true,
		arrows: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
});

$(document).ready(function(){
	$('.medical_slider').slick({
		dots: false,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '140px',
		speed: 2000,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		responsive: [
		{
			breakpoint: 600,
			settings: {
			centerPadding: '40px',
		}
				
	},
	]	
	});
	
});

$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		prevArrow: '.prevbtn',
		nextArrow: '.nextbtn',
		autoplay: true,
		speed: 1000,
		fade: true,
		fadeSpeed: 1000,
		pauseOnHover: false,
		
			
	});
	
});

$(document).ready(function(){
	$('.award_slider').slick({
		dots: false,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		
			
	});
	
});