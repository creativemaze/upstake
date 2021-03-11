"use strict";
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		pauseOnHover: false,
		pauseOnFocus: false,
	});
});

$(document).ready(function(){
	$('.boxslide').slick({
		slidesToShow: 2,
		autoplay: false,
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
	$('.boxslide-two').slick({
		slidesToShow: 2,
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
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
		{
			breakpoint: 993,
			settings: {
			slidesToShow: 1,
       
		}		
	},
	]	
	});
	
});