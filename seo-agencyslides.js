"use strict";
$(document).ready(function(){
	$('.square_slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		fade: true,
		arrows: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		asNavFor: ".photo_slider"	
	});
	
	$(".photo_slider").slick({
		slidesToShow: 1,
		speed: 1000,    
		asNavFor: ".square_slider",
		dots: false,
		fade: true,
		arrows: false,
  });
  
});

$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
		{
			breakpoint: 1025,
			settings: {
			slidesToShow: 1,
       
		}
	},
	]	
	});
	
});

$(document).ready(function(){
	$('.seo_slider').slick({
		dots: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
	
});