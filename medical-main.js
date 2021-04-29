"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.medical_slider').slick({
		dots: false,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		speed: 2000,
		autoplaySpeed: 1000,
		pauseOnHover: false,
		responsive: [
				{
					breakpoint: 992,
					settings: {
					slidesToShow: 1,
				}
				
			},
			
			{
					breakpoint: 420,
					settings: {
					slidesToShow: 1,	
					centerPadding: '20px',
				}
				
			},
		]	
	});
	
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		fadeSpeed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
				
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