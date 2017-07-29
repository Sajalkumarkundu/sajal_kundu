$(document).ready(function($){
	$(".product-carousel").owlCarousel({
		items:4,
		margin:20,
		loop:true,
		nav:true,
		autoplay:true,
		autoplay:1000,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
});