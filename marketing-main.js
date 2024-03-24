"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.feature_slider').slick({
		slidesToShow: 1,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		fade: true,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: false,
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client_slider').slick({
		slidesToShow: 3,
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					fade: true
				}			
			},
		]
	});
});

//MagnificPopup Gallery
$('.image_box').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

//Counter Script
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//Filter Gallery
jQuery(document).ready(function($) {
	$('.filter-container').filterizr({
		
	});
});

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filtergroup");
var btns = btnContainer.getElementsByClassName("filtertitle");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

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
