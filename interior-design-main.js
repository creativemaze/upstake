"use strict";
$(document).ready(function(){
	$('.interior_slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,	
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 600,
			settings: {
			slidesToShow: 1,
       
		}
			
				
	},
	]	
	});
});

$(document).ready(function(){
	$('.client_slider').slick({
		dots: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: false,
		speed: 1000,
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
document.body.classList.add('loading');
imagesLoaded(document.querySelectorAll('.blog_box'), {background: true}, () => document.body.classList.remove('loading'));


//Counter Up
jQuery(document).ready(function($) {
   $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//MagnificPopup Gallery
$('.bg_box').magnificPopup({
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
