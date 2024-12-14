"use strict";
//Slick Slider (1) One
$( window ).on( "load", function(){
	$('.bg_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint:993,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
						
			},
		]
	});
});

//Count down script
$( window ).on( "load", function(){
	const eventDate = new Date('2025/03/27 09:00');
	const currentDate = new Date();
	$('#timer-date').countdown(eventDate, {elapse: true})
	.on('update.countdown', function(event) {
		if (currentDate < eventDate) {
			$(this).html(event.strftime
			('<h3>Starts In</h3><h3>%D <span class="date_box">Days</span>  %H <span class="date_box">Hrs</span> %M <span class="date_box">Mins</span> %S S</h3>'));
		} 
		else if (currentDate > eventDate) {
			$(this).html(event.strftime
			('<h3>Ended On</h3>'+ '<h3>'+eventDate.toDateString()+'</h3>'));
		} 
		else {
			$(this).html(event.strftime
			('<h3>Event in Progress</h3>'));	
		}
	});
});

//F.A.Q.S Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active-bar");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}

//MagnificPopup Video
$('#play-video').magnificPopup({
	disableOn: 300,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 300,
	preloader: false,
	fixedContentPos: false
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