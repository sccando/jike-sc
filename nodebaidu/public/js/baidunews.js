$(document).ready(function(){
	/*banner滚动  开始*/
	var banner = $(".banner ul");
	var liLength = $(".banner ul li").length;
	var count = 0;
	var dots = $(".dots span");
	dots.eq(0).addClass("dots-index");
	
	/*设置定时器每3秒滚动一张图片*/
	setInterval(function(){
		count = (count+1)%(liLength+1);
		if(count == liLength){
			banner.css("left","0");
			count = 1;
		}
		banner.animate({
			"left": "-"+count*375+"px",
		},500);
		if(count == 3){
			dots.eq(0).addClass("dots-index").siblings().removeClass("dots-index");
		}else{
			dots.eq(count).addClass("dots-index").siblings().removeClass("dots-index");
		}
	},3000);
	/*banner滚动  结束*/

	/*热点新闻向上滚动  开始*/
	var hotNews = $(".hot-news-title");
	var newsNum = $(".hot-news-title li").length;
	var scrollNum = 1;
	setInterval(function(){
		hotNews.animate({
			"top": "-"+(24*scrollNum)+"px",
		},1000);
		if(scrollNum == newsNum-1){
			hotNews.animate({
				"top": "0",
			},0);
			scrollNum = 1;
		}else{
			scrollNum++;
		}
	},3000);
	/*热点新闻向上滚动  结束*/

	/*导航点击切换  开始*/
	$(".nav-menu a").click(function(e){
		e.preventDefault();
		$(this).addClass("chosen").parent().siblings().children("a").removeClass("chosen");
		var type = $(this).text();
		refreshNews(type);
	})
	/*导航点击切换  结束*/

	
	refreshNews("推荐");

	/*请求数据向页面中追加  开始*/
	function refreshNews(type){
		var $newsItem = $(".news-item ul");
		$newsItem.empty();
		$.ajax({
			url: "/baidunews",
		    type: "get",
		    datatype: "json",
		    data:{newsType:type},
		    success: function(data) {
		    	data.forEach(function(item,index,array){
			        var $list = $("<li></li>").prependTo($newsItem);
			        var $listA = $("<a></a>").attr("href", "javascript:;").appendTo($list);
			        var $newsImg = $("<div></div>").addClass("news-img").appendTo($listA);
			        var $img = $("<img>").attr("src", item.newsImg).appendTo($newsImg);
			        var $newsContent = $("<div></div>").addClass("news-content").appendTo($listA);
			        var $newsTitle = $("<p></p>").addClass("news-title").html(item.newsTitle).appendTo($newsContent);
			        var $newsDate = $("<span></span>").addClass("news-date").html(item.newsDate.split('T')[0]).appendTo($newsContent);
			        var $newsHot = $("<span></span>").addClass("news-hot").html(item.newsHot).appendTo($newsContent);
		   		})
		   		console.log(data);
		    }
		});
	};
	/*请求数据向页面中追加  结束*/


});