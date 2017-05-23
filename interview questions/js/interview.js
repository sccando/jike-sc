$(document).ready(function(){
	//鼠标移至标签，相应内容显示，点击标签，相应内容显示
	$('.hc').mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.c-hc').show();
		$('.c-js').hide();
		$('.c-others').hide();
	});

	$('.js').mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.c-js').show();
		$('.c-hc').hide();
		$('.c-others').hide();
	});

	$('.others').mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.c-others').show();
		$('.c-js').hide();
		$('.c-hc').hide();
	});
});