$(function(){
	$('section h3').on('click', function(){
		$(this).siblings('div').slideToggle(300);
	});

});