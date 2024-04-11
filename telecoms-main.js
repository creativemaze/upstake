"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.word_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		vertical: true	
	});
	
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.telecoms_slider').slick({
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
	
	$('.telecoms_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.heading_group > div.active').removeClass('active');
			$('.heading_group > div').eq(nextSlide).addClass('active');
	});
  
	$('.heading_group > div').on('click', function(e){
		e.preventDefault();
		$('.heading_group > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.telecoms_slider').slick('slickGoTo', targetSlide );
	});
	
});

//Slick Slider (3) Three
$(document).ready(function(){
	$('.feature_slider').slick({
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
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					dots: true,
					fade: true
				}			
			},
		]
	});
});

//Animate Scroll
$( ".buttoncol a" ).click(function() {
	$('.heading_group').animatescroll();
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
