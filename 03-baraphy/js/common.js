$(function(){
	$('#gnb > ul > li').on('mouseenter', function(){
		var i=$(window).width();
		if(i>1024){
			$(this).children('div').css('display', 'block');
		};
	});

	$('#gnb > ul > li').on('mouseleave', function(){
		var i=$(window).width();
		if(i>1024){
			$(this).children('div').css('display', 'none');
		};
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

	$('.link').on('click', function(){
		$(location).attr('href', 'sub_product.html')
	});

	$('.joinM').on('click', function(){
		$(location).attr('href', 'join.html')
	});

	$('#menu').on('click', function(){
		$('#gnb').slideToggle(200);

		if($(this).siblings('#headerBg').attr('data-click')=='false'){
			$(this).siblings('#headerBg').css('display', 'block');
			$(this).siblings('#headerBg').attr('data-click', 'true');
		}else{
			$(this).siblings('#headerBg').css('display', 'none');
			$(this).siblings('#headerBg').attr('data-click', 'false');
		}
	});

	$(window).scroll(function(){
		var i=$(window).scrollTop();

		 if(i>400){
		 	$('.toTop').css('display', 'block');
		 }else{
		 	$('.toTop').css('display', 'none');
		 }
	});

});