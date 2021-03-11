"use strict";
$(document).ready(function(){
	$('.digital_slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		fade: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
	$('.digital_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_head a.active').removeClass('slick-current');
			$('.title_head a').eq(nextSlide).addClass('slick-current');
	});
  
	$('.title_head a').on('click', function(e){
		e.preventDefault();
		$('.title_head a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.digital_slider').slick('slickGoTo', targetSlide );
	});
	
});

$(document).ready(function(){
	$('.content_slider').slick({
		dots: false,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
});

$(document).ready(function(){
	$('.distribute_slider').slick({
		dots: false,
		prevArrow: '.prev_button_two',
		nextArrow: '.next_button_two',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
});

$(document).ready(function(){
	$('.manage_slider').slick({
		dots: false,
		prevArrow: '.prev_button_three',
		nextArrow: '.next_button_three',
		autoplay: true,
		speed: 1000,
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