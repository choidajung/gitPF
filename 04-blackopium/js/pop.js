$(function(){
	$('.border').on('click', function(){
		$(this).siblings('li').removeClass('on');
		$(this).addClass('on');
	});
	$('.imgBtn li').on('click', function(){
		var src=$(this).children('img').attr('src');
		var alt=$(this).children('img').attr('alt');

		//$('.popUp .imgBoxP img').attr({'src':src, 'alt':alt});
		$(this).parent().siblings('.imgBoxP').children('img').attr({'src':src, 'alt':alt});
	});

	$('.plus').on('click',function(){
		var q=$('.numP').text();
		var s=parseInt(q)+1

		$('.numP').text(s);
	});

	$('.minus').on('click',function(){
		var q=$('.numP').text();
		var s=parseInt(q)-1

		$('.numP').text(s);

		if(s==0){
			alert('1개 이상 선택하셔야 합니다.');
			s++
			$('.numP').text(s);
		};
	});

	$('.close').on('click', function(){
		$('.popUp').css('display', 'none');
	});

	$('.imgBox').on('click', function(){
		$(this).siblings('.popUp').css('display', 'block');
	});

});