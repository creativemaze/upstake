"use strict";
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: false,
	});
	
	$('.slickslide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.header__content > div.active').removeClass('active');
			$('.header__content > div').eq(nextSlide).addClass('active');
	});
  
  
	$('.header__content > div').on('click', function(e){
		e.preventDefault();
		$('header__content > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.slickslide').slick('slickGoTo', targetSlide );
	});
	
});

$(document).ready(function(){
	$('.restaurant_slider').slick({
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
	
	$('.restaurant_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_group a.active').removeClass('active');
			$('.title_group a').eq(nextSlide).addClass('active');
	});
  
  
	$('.title_group a').on('click', function(e){
		e.preventDefault();
		$('.title_group a.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.restaurant_slider').slick('slickGoTo', targetSlide );
	});
	
});

$(document).ready(function(){
	$('.beverage_slider').slick({
		dots: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
	
});

$(document).ready(function(){
	$('.daily_slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,		
	});
	
});