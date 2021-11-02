"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.info_slider').slick({
		dots: false,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
		speed: 1000,
		autoplaySpeed: 1000,
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

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 801,
				settings: 
				{
					slidesToShow: 2,
       
				}	
			},
			
			{
				breakpoint: 501,
				settings: 
				{
					slidesToShow: 1,
       
				}	
			},
		]	
	});
	
});

//MagnificPopup Gallery
$('.feature_box').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$('.footer_grid').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
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
