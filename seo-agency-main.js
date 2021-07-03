"use strict";
//Slick Slider (1) One
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

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		verticalSwiping: true,
		touchMove: false,
		vertical: true,
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

//Counter Script
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//Animate on Scroll default settings
$(window).on('load', function () {
	AOS.refresh();
});

$(function () {
	AOS.init({
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 200, // offset (in px) from the original trigger point
		delay: 300, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: true, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});	

//Preload all the images in the page
imagesLoaded({background: true}, () => document.body.classList.remove('loading'));