$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		var dataImg = {"data":[{"src":"img1.jpg"},{"src":"img2.jpg"},{"src":"img3.jpg"},{"src":"img4.jpg"},{"src":"img5.jpg"},{"src":"img6.jpg"},{"src":"img7.jpg"},{"src":"img8.jpg"},{"src":"img9.jpg"},{"src":"img10.jpg"},{"src":"img11.jpg"},{"src":"img12.jpg"},{"src":"img13.jpg"},{"src":"img14.jpg"},{"src":"img15.jpg"}]}
		
		/*自动加载图片  开始*/
		$(window).scroll(function(){
			if(scrollSide()){
				$.each(dataImg.data,function(index,value){
					var frame = $("<div>").addClass("frame").appendTo(".container");
					var box = $("<div>").addClass("box").appendTo(frame);
					$("<img>").attr("src","img/"+$(value).attr("src")).appendTo(box);
				});
				imgLocation();
			};
		});
		/*自动加载图片  结束*/

		/*图片自适应  开始*/
		$(window).resize(function(){
	       imgLocation();
	    });
		/*图片自适应  结束*/

	});

	/*图片定位布局  开始*/
	function imgLocation(){
		var frame = $(".frame");	//获取相框
		var frameWidth = frame.eq(0).width();	//获取相框的宽度
		var imgnum = Math.floor($(window).width()/(frameWidth+8));	//计算一行能摆几张图片
		var frameHeightArr = [];	//存放图片的高度
		frame.each(function(index,value){
			var frameHeight = frame.eq(index).height();		//遍历相框，把图片的高度放入数组
			if(index < imgnum){
				frameHeightArr[index] = frameHeight;
			}else{
				var minframeHeight = Math.min.apply(null,frameHeightArr);		//获取上一排图片的最小高度
				var minframeIndex = $.inArray(minframeHeight,frameHeightArr);	//获取最小高度图片的索引值
				$(value).css({		//定义图片的布局
					"position":"absolute",
					"top":minframeHeight+8,
					"left":frame.eq(minframeIndex).position().left
				});
			frameHeightArr[minframeIndex] += frame.eq(index).height()+8;	
			};
		});
	};
	/*图片定位布局  结束*/

	/*滚动到一定位置时加载  开始*/
	function scrollSide(){
		var frame = $(".frame");
		var lastframeHeight = frame.last().get(0).offsetTop+Math.floor(frame.last().height()/3);	//最后一张图片的当前位置
		var height = $(document).width();		//窗口的高度
		var scrollHeight = $(window).scrollTop();	//滚动的高度
		return (lastframeHeight<scrollHeight+height)?true:false;
	};
	/*滚动到一定位置时加载  结束*/

});