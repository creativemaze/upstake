"use strict";
//Slick Slider
$(document).ready(function(){
	$('.bg_slider').slick({
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
	
	$('.bg_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.bg_feature > div.active').removeClass('active');
		$('.bg_feature > div').eq(nextSlide).addClass('active');
			
	});
  
	$('.bg_feature > div').on('mouseover', function(e){
		e.preventDefault();
		$('.bg_feature > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.bg_slider').slick('slickGoTo', targetSlide );
	});
	
});

//MagnificPopup Gallery (1) One
$( window ).on( "load", function(){
	$('.image_box').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
	});
});

//MagnificPopup Gallery (2) Two
$('.footer_grid').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

//Counter Script
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//Filter Gallery
jQuery(document).ready(function($) {
	$('.filter-container').filterizr({});
});

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filtergroup");
var btns = btnContainer.getElementsByClassName("filtertitle");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("activetitle");
		current[0].className = current[0].className.replace(" activetitle", "");
		this.className += " activetitle";
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