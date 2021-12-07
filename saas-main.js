"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.saas_slider').slick({
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
	
	$('.saas_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.heading_group > div.active').removeClass('active');
			$('.heading_group > div').eq(nextSlide).addClass('active');
	});
  
	$('.heading_group > div').on('click', function(e){
		e.preventDefault();
		$('.heading_group > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.saas_slider').slick('slickGoTo', targetSlide );
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.bg_slider').slick({
		dots: false,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 1000,
		autoplaySpeed: 1000,
		pauseOnHover: false,	
	});
	
});

//Slick Slider (3) Three
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 993,
				settings: 
				{
					slidesToShow: 2,
       
				}	
			},
			
			{
				breakpoint: 601,
				settings: 
				{
					slidesToShow: 1,
       
				}	
			},
		]	
	});
	
});

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
				color: '#159957'
			}
			
			}).on('circle-animation-progress', function(event, progress, stepValue) {
				$(this).find('div').text((stepValue * 100).toFixed(1) + "%");
			}).stop();
		}
    });
}

// Show animated elements
animateElements();
	$(window).scroll(animateElements);
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
