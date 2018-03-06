$(function(){

	$('#menuBtn').on('click', function(){
		$('#menu').css('display','block');
	});
	
	$('#menuBtn_x').on('click', function(){
		$('#menu').css('display','none');
	});

	$('.tit').on('click', function(){
		$(this).siblings().slideToggle(300);
	});
	
	$('footer .btn').on('click', function(){
		if($(this).attr('data-click')=='false'){
			$(this).siblings('ul').stop().slideDown();
			$(this).attr('data-click', 'true');
			$(this).addClass('on');
		}else{
			$(this).siblings('ul').stop().slideUp();
			$(this).attr('data-click', 'false');
			$(this).removeClass('on');
		}

	});
});