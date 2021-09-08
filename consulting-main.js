"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 801,
				settings: {
					slidesToShow: 2,
       
				},
			
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
       
				},
			
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

//F.A.Q.S Accordion
var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active-bar");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}

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
