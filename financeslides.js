"use strict";
$(document).ready(function(){
	$('.finance_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		fade: true	
	});
	
	$('.finance_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.finance_content > div.active').removeClass('active');
			$('.finance_content > div').eq(nextSlide).addClass('active');
	});
  
	$('.finance_content > div').on('click', function(e){
		e.preventDefault();
		$('.finance_content > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.finance_slider').slick('slickGoTo', targetSlide );
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
			breakpoint: 993,
			settings: {
			slidesToShow: 1,
       
		}		
	},
	]	
	});
	
});