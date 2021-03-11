"use strict";
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
		$('.heading_group > div.active').removeClass('slick-current');
			$('.heading_group > div').eq(nextSlide).addClass('slick-current');
	});
  
	$('.heading_group > div').on('click', function(e){
		e.preventDefault();
		$('.heading_group > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.saas_slider').slick('slickGoTo', targetSlide );
	});
	
});

$(document).ready(function(){
	$('.tool_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		adaptiveHeight: true,
		speed: 2000,
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
			breakpoint: 992,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});