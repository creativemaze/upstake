"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.digital_slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		fade: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
	$('.digital_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_head a.active').removeClass('slick-current');
			$('.title_head a').eq(nextSlide).addClass('slick-current');
	});
  
	$('.title_head a').on('click', function(e){
		e.preventDefault();
		$('.title_head a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.digital_slider').slick('slickGoTo', targetSlide );
	});
	
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.content_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '20px',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					centerPadding: '75px',
				}		
			},
			
			{
				breakpoint: 431,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
			
		]
	});
	
});

//Slick Slider (3) Three
$(document).ready(function(){
	$('.distribute_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_button_2',
		nextArrow: '.next_button_2',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '20px',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					centerPadding: '75px',
				}		
			},
			
			{
				breakpoint: 421,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
			
		]
	});
	
});

//Slick Slider (4) Four
$(document).ready(function(){
	$('.manage_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_button_3',
		nextArrow: '.next_button_3',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '20px',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					centerPadding: '75px',
				}		
			},
			
			{
				breakpoint: 421,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
		]
	});
	
});

//Slick Slider (5) Five
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
				slidesToShow: 2,
       
			}	
		},
		
		{
				breakpoint: 769,
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

//Counter script
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
