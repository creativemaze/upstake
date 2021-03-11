"use strict";
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

$(document).ready(function(){
	$('.client__slider').slick({	
		infinite: true,
		prevArrow: '.prevbtn',
		nextArrow: '.nextbtn',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
	});
	
});