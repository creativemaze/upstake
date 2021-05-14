"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 2000,
		fade: true,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		pauseOnHover: false,
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.marketing_slider').slick({
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
	
	$('.marketing_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_group a.active').removeClass('active');
			$('.title_group a').eq(nextSlide).addClass('active');
	});
  
	$('.title_group a').on('click', function(e){
		e.preventDefault();
		$('.title_group a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.marketing_slider').slick('slickGoTo', targetSlide );
	});
});

//Slick Slider (3) Three
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