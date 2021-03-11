"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		slidesToShow: 3,
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

//Slick Slider (2) Two
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
			breakpoint: 801,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});

//Animated Skill Bar
$.fn.isFullyInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementTop >= viewportTop && elementBottom <= viewportBottom;
};
jQuery(document).ready(function(){
	// on page ready check if element is already in viewport
	animateProgressBar();
});

$(window).on('resize scroll', function() {
	// on page resize or scroll check if element is in viewport
	animateProgressBar();
});

// if elemnt is visble in viewport , then animate
var animateProgressBar = function(){
    $('.skillbar').each(function() {
     if ($(this).isFullyInViewport()) {
     	jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},600);
     }
  }); 
}

//MagnificPopup Gallery
$('.portfolio_col').magnificPopup({
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

//Counter Up
jQuery(document).ready(function($) {
   $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
