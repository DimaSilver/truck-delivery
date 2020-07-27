$(function(){
	$('.services-slider').slick({
		prevArrow:'<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="" /></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="" /></button>'
	});
	$('.menu-btn').on('click', function(){
		$('.menu-list').slideToggle();
	});
	new WOW().init();
});