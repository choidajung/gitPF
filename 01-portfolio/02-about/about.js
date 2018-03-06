$(function(){
	var ht=$(window).height();
	$('.ht').height(ht);

	$(window).resize(function(){
		var ht=$(window).height();
		$('.ht').height(ht);

		var wt=$(window).width();
		var wt2=wt/2
		var wt4=wt/4
		$('.wt').eq(0).width(wt2);
		$('.wt').eq(5).width(wt4);
	});

	var wt=$(window).width();
	var wt2=wt/2
	var wt4=wt/4
	$('.wt').eq(0).width(wt2);
	$('.wt').eq(5).width(wt4);

	$('.aboutCnt').width(960*4+wt2+wt4);
	
	 $('#wrap').mousewheel(function(e, delta) {
   		 this.scrollLeft -= (delta * 50);
 		 e.preventDefault();
	});

	 $('#wrap').scroll(function(){

	 	var i=$(this).scrollLeft();

	 	if(i<900){
	 		$('img').attr('src', '../images/about/img_'+1+'.gif');
	 		$('#content li').eq(1).css('opacity', 1)
	 		$('#content li').eq(2).css('opacity', 0)
	 	}
	 	else if(i>900 && i<1860){
	 		$('img').attr('src', '../images/about/img_'+2+'.gif');
	 		$('#content li').eq(1).css('opacity', 0)
	 		$('#content li').eq(2).css('opacity', 1)
	 		$('#content li').eq(3).css('opacity', 0)
	 	}
	 	else if(i>1860 && i<2820){
	 		$('img').attr('src', '../images/about/img_'+3+'.gif');
	 		$('#content li').eq(2).css('opacity', 0)
	 		$('#content li').eq(3).css('opacity', 1)
	 		$('#content li').eq(4).css('opacity', 0)
	 	}
	 	else if(i>2820){
	 		$('img').attr('src', '../images/about/img_'+4+'.gif');
	 		$('#content li').eq(3).css('opacity', 0)
	 		$('#content li').eq(4).css('opacity', 1)
	 	}
	 });
});