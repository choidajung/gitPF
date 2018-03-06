$(function(){
	wt=$(window).width();
	wtH=wt/2;

	$('#artist section li').width(wtH);
	$('#artist section ul').css('margin-left', -wtH);

	$(window).resize(function(){
		$('#artist section li').width(wtH);
		$('#artist section ul').css('margin-left', -wtH);
	});

	$('#artist .btn .rightBtn').on('click', function(){
		var posL=parseInt($('.left').css('margin-left'));
		var posR=parseInt($('.right').css('margin-left'));

		$('.left').animate({marginLeft:posL-wtH}, function(){
			$('.left').css('margin-left', -wtH+'px');
			$('.left li').first().appendTo('.left');
		});
		$('.right').animate({marginLeft:posR-wtH}, function(){
			$('.right').css('margin-left', -wtH+'px');
			$('.right li').first().appendTo('.right');
		});
	});

	$('#artist .btn .leftBtn').on('click', function(){
		var posL=parseInt($('.left').css('margin-left'));
		var posR=parseInt($('.right').css('margin-left'));

		$('.left').animate({marginLeft:posL+wtH}, function(){
			$('.left').css('margin-left', -wtH+'px');
			$('.left li').last().prependTo('.left');
		});
		$('.right').animate({marginLeft:posR+wtH}, function(){
			$('.right').css('margin-left', -wtH+'px');
			$('.right li').last().prependTo('.right');
		});

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

	setInterval(function(){
		var i=$('.bg .on').index();

		$('.bg li').eq(i).removeClass('on');

		if(i==4){
			$('.bg li').eq(0).addClass('on');
		}else{
			$('.bg li').eq(i+1).addClass('on');
		}
		
	},3500);

	$(window).scroll(function(){
		var scr=$(window).scrollTop();

		 if(scr>900){
		 	$('nav').addClass('fix');
		 }else{
		 	$('nav').removeClass('fix');
		 }

		 if(scr<900){
		 	$('nav li').removeClass('on');
		 }else if(scr>900 && scr<2051){
		 	$('nav li').removeClass('on');
		 	$('nav li').eq(0).addClass('on');
		 }else if(scr>2051 && scr<2921){
			$('nav li').removeClass('on');
		 	$('nav li').eq(1).addClass('on');
		 }else if(scr>2921 && scr<4894){
			$('nav li').removeClass('on');
		 	$('nav li').eq(2).addClass('on');
		 }else if(scr>4894){
			$('nav li').removeClass('on');
		 	$('nav li').eq(3).addClass('on');
		 }
	});

});