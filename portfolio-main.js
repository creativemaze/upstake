"use strict";
//MagnificPopup Gallery
$('.image_box').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$('.portfolio_icon').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$('.slide_image').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$('.project_image').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

//Filter Gallery
jQuery(document).ready(function($) {
	$('.filter-container').filterizr({});
});


//Add active class to the current button (highlight it)
/*var btnContainer = document.getElementById("filtergroup");
var btns = btnContainer.getElementsByClassName("filtertitle");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}*/

$(document).ready(function(){
	$('.portfolio_slider').slick({
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(document).ready(function(){
	$('.bg_slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					
				}			
			},
			
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					centerPadding: '50px',
				}			
			},
			
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					centerPadding: '20px',
				}			
			},
		]
	});
	
});

$(document).ready(function(){
	$('.project_slider').slick({
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		
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