"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.boxslide').slick({
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
		dots: false,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: false,
		autoplaySpeed: 3000,
		fade: true,
		fadeSpeed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
				
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
	animateSkillBar();
});

$(window).on('resize scroll', function() {
	// on page resize or scroll check if element is in viewport
	animateSkillBar();
});

// if elemnt is visble in viewport , then animate
var animateSkillBar = function(){
    $('.skillbar').each(function() {
     if ($(this).isFullyInViewport()) {
     	jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1500);
     }
  }); 
}

//Animated Progress Bar
$(document).ready(function($) {
  function animateElements() {
	$('.progressbar').each(function() {
		var elementPos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		var percent = $(this).find('.circle').attr('data-percent');
		var percentage = parseInt(percent, 10) / parseInt(100, 10);
		var animate = $(this).data('animate');
		if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
			$(this).data('animate', true);
			$(this).find('.circle').circleProgress({
			startAngle: -Math.PI / 2,
			value: percent / 100,
			thickness: 14,
			size: 125,
			animation: {
				duration: 2800,
			},
			
			fill: {
				color: '#ffffff'
			},
			
			emptyFill:{
				color: '#111111'
			}
			
			}).on('circle-animation-progress', function(event, progress, stepValue) {
				$(this).find('div').text((stepValue * 100).toFixed(1) + "%");
			}).stop();
		}
    });
}

//Show animated elements
animateElements();
	$(window).scroll(animateElements);
});

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
