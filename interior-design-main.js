"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.portfolio_slider').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					
				}			
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					centerPadding: '100px',
				}			
			},
			
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					centerPadding: '35px',
				}			
			},
			
			{
				breakpoint: 376,
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
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	
	});
});

//MagnificPopup Gallery
$('.feature_image').magnificPopup({
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
