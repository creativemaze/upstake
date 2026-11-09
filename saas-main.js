"use strict";
//Slick Slider (1) One
$( window ).on( "load", function(){
	$('.saas_slider').slick({
		dots: false,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplaySpeed: 5000,
		pauseOnHover: false,		
	});
});

//Slick Slider (2) Two
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
$( ".services a" ).click(function() {
	$('.saas_area_two').animatescroll();
});

$( ".features a" ).click(function() {
	$('.saas_area_three').animatescroll();
});

$( ".process a" ).click(function() {
	$('.saas_area_four').animatescroll();
});

$( ".pricing a" ).click(function() {
	$('.saas_area_six').animatescroll();
});

$( ".analysis a" ).click(function() {
	$('.saas_area_seven').animatescroll();
});

$( ".news a" ).click(function() {
	$('.saas_area_ten').animatescroll();
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