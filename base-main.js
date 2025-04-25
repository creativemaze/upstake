"use strict";
$( window ).on( "load", function(){
	$('.word_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		vertical: true	
	});
});

$( ".buttoncol a" ).click(function() {
	$('.home_head').animatescroll();
});

$( ".head_btn a" ).click(function() {
	$('.home_group_info').animatescroll();
});

$(document).ready(function(){
	$('.bg_slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
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
					centerPadding: '50px',
				}			
			},
			
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					centerPadding: '50px',
				}			
			},
		]
	});
	
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
		document.querySelector(".slide_word").style.display = "none";
		 
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
		document.querySelector(".slide_word").style.display = "block";
    }
};