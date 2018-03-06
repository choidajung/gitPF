$(function(){
	$(window).scroll(function(){
		var wt=$(window).width();

		if(wt>480){
			var i=$(window).scrollTop();
			if(i>760){
				$('header').css('display', 'block');
			}else if(i<760){
				$('header').css('display', 'none');
			}
		}else{
			var i=$(window).scrollTop();
			if(i>50){
				$('header').css('display', 'block');
			}else if(i<50){
				$('header').css('display', 'none');
			}
		}
	});

	var wt=$(window).width();
	$('#mainTit > div > section').width(wt);

	$(window).resize(function(){
		var wt=$(window).width();
		$('#mainTit > div > section').width(wt);
	});

	function slide(){
		var wt=$(window).width();
		var posLeft=parseInt($('.mainWrap').css('margin-left'));

		if(posLeft>wt*-4){
			var i=posLeft/-wt
			$('.mainBtn div').eq(i+1).addClass('on').siblings().removeClass('on');
			$('.mainWrap').animate({marginLeft:posLeft-wt});
		}else{
			$('.mainBtn div').eq(0).addClass('on').siblings().removeClass('on');
			$('.mainWrap').animate({marginLeft:0})
		}
	}

	var auto=setInterval(slide, 2500);

	$('.mainBtn div').on('click', function(){
		var wt=$(window).width();
		clearInterval(slide);

		var i=$(this).index();
		$('.mainWrap').animate({marginLeft:i*-wt});

		$('.mainBtn div').removeClass('on');
		$(this).addClass('on');
	});

	$('.mainBtn').on('mouseenter', function(){
		clearInterval(auto);
	})
	$('.mainBtn').on('mouseleave', function(){
		auto=setInterval(slide, 2500);
	});

	$('#new .rightBtn').click(function(){
		var wt=$(window).width();
		var i;

		if(wt>1024){
			i=950
		}else if(wt>480){
			i=750
		}else{
			i=350
		}

		var pos=parseInt($('.newSlide').css('margin-left'));

		$('.newSlide').animate({marginLeft:pos-i}, function(){
			$('.newSlide').css('margin-left', -i+'px');
			$('.newSlide li').first().appendTo('.newSlide');
		});
	});

	$('#new .leftBtn').click(function(){
		var wt=$(window).width();
		var i;

		if(wt>1024){
			i=950
		}else if(wt>480){
			i=750
		}else{
			i=350
		}

		var pos=parseInt($('.newSlide').css('margin-left'));

		$('.newSlide').animate({marginLeft:pos+i}, function(){
			$('.newSlide').css('margin-left', -i+'px');
			$('.newSlide li').last().prependTo('.newSlide');
		});
	});

});