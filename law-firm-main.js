"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		slidesToShow: 3,
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint:601,
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
	$('.square_slider').slick({
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
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
       
				}		
			},
		]
		
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
