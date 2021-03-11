"use strict";
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
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
	$('.client-slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
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