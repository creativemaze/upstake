"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.bg_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
       
				},
			
			},
	
		]	
	});
	
});

//Slick Slider (3) Three
$(document).ready(function(){
	$('.form_slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		fade: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
	$('.form_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_head a.active').removeClass('active');
			$('.title_head a').eq(nextSlide).addClass('active');
	});
  
	$('.title_head a').on('click', function(e){
		e.preventDefault();
		$('.title_head a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.form_slider').slick('slickGoTo', targetSlide );
	});
	
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

//Preload all the images in the page
imagesLoaded({background: true}, () => document.body.classList.remove('loading'));
