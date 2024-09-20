"use strict";
//Slick Slider Settings
const settings_1 ={
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '50px',
}


const settings_2 ={
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '50px',
}

const settings_3 = {
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '100px',
}

const settings_4 = {
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '35px',
}

const settings_5 = {
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '20px',
}

$(document).ready(function(){
    if ($(window).width() > 993 ) {
        $('.portfolio_slider').slick(settings_1);
    }
	
	else if($(window).width() >= 601 && $(window).width() <= 993){
		$('.portfolio_slider').slick(settings_2);
	}
	
	else if($(window).width() >= 430 && $(window).width() <= 601){
		$('.portfolio_slider').slick(settings_3);
	}
	
	else if($(window).width() >= 376 && $(window).width() <= 430){
		$('.portfolio_slider').slick(settings_4);
	}
	
	else if($(window).width() >= 320 && $(window).width() <= 376){
		$('.portfolio_slider').slick(settings_5);
	}
});

//MagnificPopup Gallery (1) One
$('.portfolio_image').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
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