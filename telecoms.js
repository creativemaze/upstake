"use strict";
$(document).ready(function(){
	$('.word_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		vertical: true	
	});
	
});

$(document).ready(function(){
	$('.telecoms_slider').slick({
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
	
	$('.telecoms_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.heading_group > div.active').removeClass('active');
			$('.heading_group > div').eq(nextSlide).addClass('active');
	});
  
  
	$('.heading_group > div').on('click', function(e){
		e.preventDefault();
		$('.heading_group > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.telecoms_slider').slick('slickGoTo', targetSlide );
	});
	
});
