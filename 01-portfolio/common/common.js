$(function(){
	$('#btn').on('click', function(){
		if($(this).attr('data-click')=='false'){
			$(this).attr('data-click', 'true');
			$(this).addClass('on');
			$('#gnbBox').stop().animate({marginLeft:0}, 500);
		}else{
			$(this).attr('data-click', 'false');
			$(this).removeClass('on');
			$('#gnbBox').stop().animate({marginLeft:-340}, 500);
		}
	});
	
});