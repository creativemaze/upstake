"use strict";
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
				color: '#00CDAC'
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

//MagnificPopup Video
$('#play-video').magnificPopup({
	disableOn: 300,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 300,
	preloader: false,
	fixedContentPos: false
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
