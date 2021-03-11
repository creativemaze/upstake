"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.bakery_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		fade: true,
		adaptiveHeight: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
	$('.bakery_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_group a.active').removeClass('active');
			$('.title_group a').eq(nextSlide).addClass('active');
	});
  
	$('.title_group a').on('click', function(e){
		e.preventDefault();
		$('.title_group a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.bakery_slider').slick('slickGoTo', targetSlide );
	});
	
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.bg_slider').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '90px',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}		
			},
			
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
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
			breakpoint: 800,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});

//MagnificPopup Gallery
$('.footer_grid').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
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
