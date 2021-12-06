"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.boxslide').slick({
		slidesToShow: 4,
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: 
					{
						slidesToShow: 1,
						dots: true,
						fade: true
					}
						
			},
			
		]
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.feature_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		fade: true,
		
	});
	
	$('.feature_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.thumb_content.active').removeClass('active');
			$('.thumb_content').eq(nextSlide).addClass('active');
	});
  
	$('.thumb_content').on('click', function(e){
		e.preventDefault();
		$('.thumb_content.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.feature_slider').slick('slickGoTo', targetSlide );
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
