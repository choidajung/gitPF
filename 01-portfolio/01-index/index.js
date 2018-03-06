$(function(){
	var ht=$(window).height();
	$('.ht').height(ht);

	$(window).resize(function(){
		var ht=$(window).height();
		$('.ht').height(ht);
	});

	$('.ht').on('mousewheel', function(event, delta){
		if(delta>0){
			var prev=$(this).prev().offset().top;
			$('html, body').stop().animate({'scrollTop':prev}, 700)
		}else if(delta <0){
			var nxt=$(this).next().offset().top;
			$('html, body').stop().animate({'scrollTop':nxt}, 700);
		}
	});

	$('.imgbox img').on('mouseenter', function(){
		var i=$(this).parents('.ht').index();
		$(this).attr('src', '01-portfolio/images/hover/img_'+i+'.gif');
		
		if(i==2){
			$(".bg").css('display', 'block');
		}
	});
		
	$('.imgbox img').on('mouseleave', function(){
		var i=$(this).parents('.ht').index();
		$(this).attr('src', '01-portfolio/images/basic/img_'+i+'.gif');
		
		if(i==2){
			$(".bg").css('display', 'none');
			}
	});
	
	setInterval(function(){
		$('#main .arrow').animate({top:'45%', opacity:1}, 10).animate({top:'50%', opacity:0}, 1000)
		$('.a42 .arrow').animate({top:'42%', opacity:1}, 10).animate({top:'47%', opacity:0}, 1000)
	}, 1000);
});