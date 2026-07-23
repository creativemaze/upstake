"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.feature_slider').slick({
		slidesToShow: 4,
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 801,
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
	$('.bg_slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					
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
					centerPadding: '20px',
				}			
			},
		]
	});
	
});

// Add current class to the current button (highlight it)
var btns = document.getElementsByClassName("accordion");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("current");
		current[0].className = current[0].className.replace(" current", "");
		this.className += " current";
	});
}

//Accordion
var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("current-bar");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}

//MagnificPopup Video
$('#play-video').magnificPopup({
	disableOn: 300,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 300,
	preloader: false,
	fixedContentPos: false
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