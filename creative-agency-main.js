"use strict";
//Slick Slider (1) One
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

//Slick Slider (2) Two
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

//Slick Slider (3) Three
$(document).ready(function(){
	$('.boxslide-two').slick({
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

//Slick Slider (4) Four
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
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

//MagnificPopup Video
$('#play-video').magnificPopup({
	disableOn: 300,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 300,
	preloader: false,
	fixedContentPos: false
});

//MagnificPopup Gallery (1) One
$('.featured_col').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
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