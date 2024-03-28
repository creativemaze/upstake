"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.square_slider').slick({
		autoplay: false,
		infinite: true,
		speed: 1000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: false,
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint:993,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
						
			},
		]
	});
});

//MagnificPopup Lightbox Gallery
$('.featured_image').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	},
});

//MagnificPopup Lightbox Gallery
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

//Page Preloader
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
		 
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
