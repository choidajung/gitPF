$(function(){
	$('.list > li').on('click', function(){
		var i=$(this).attr('class');
		$(location).attr('href',i+'.html');
	});
});