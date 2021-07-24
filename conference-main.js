"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.bg_slider').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		centerPadding: '90px',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			{
				breakpoint: 840,
				settings: {
					slidesToShow: 1,
				}		
			},
			
			{
				breakpoint: 541,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
			
		]
	});
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
       
				}	
			},
			
			{
				breakpoint: 801,
				settings: {
					slidesToShow: 1,
       
				}	
			},
		]	
	});
});

//Count down script
$(document).ready(function(){
	// Set the date we're counting down to
	var countDownDate = new Date("October 31, 2021 15:37:25").getTime();

	// Update the count down every 1 second
	var countdownfunction = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();
  
	// Find the distance between now an the count down date
	var distance = countDownDate - now;
  
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	// Output the result in an element with id="demo"
	document.getElementsByClassName("days")[0].innerHTML = days + " days ";
  
	// Output the result in an element with id="demo"
	document.getElementsByClassName("hrs")[0].innerHTML = hours + " hrs ";
  
	// Output the result in an element with id="demo"
	document.getElementsByClassName("min")[0].innerHTML = minutes + " mins ";
  
	// Output the result in an element with id="demo"
	document.getElementsByClassName("seconds")[0].innerHTML = seconds + " s ";
  
	// If the count down is over, write some text 
	if (distance < 0) 
		{
			clearInterval(countdownfunction);
			document.getElementsByClassName("seconds")[0].innerHTML = "Event in Progress";
			document.getElementsByClassName("days")[0].style.display = "none";
			document.getElementsByClassName("hrs")[0].style.display = "none";
			document.getElementsByClassName("min")[0].style.display = "none";
		}
	}, 1000);
	
});

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

//Preload all the images in the page
imagesLoaded({background: true}, () => document.body.classList.remove('loading'));
