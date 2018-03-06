$(function(){
	$('.ingBtn').on('click', function(){
		$('.ingredient').slideToggle();
	});

	$('.plus').on('click',function(){
		var q=$('.num').text();
		var s=parseInt(q)+1

		$('.num').text(s);
	});

	$('.minus').on('click',function(){
		var q=$('.num').text();
		var s=parseInt(q)-1

		$('.num').text(s);

		if(s==0){
			alert('1개 이상 선택하셔야 합니다.');
			s++
			$('.num').text(s);
		};
	});

});