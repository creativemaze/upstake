"use strict";
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		pauseOnHover: false,
		pauseOnFocus: false,
	});

});

$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 800,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});