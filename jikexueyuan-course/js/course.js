$(document).ready(function() {
    /*点击搜索图标，搜索框显示  开始*/
    $(".search-icon").click(function() {
        $(".searchbox").addClass("scale");
    });
    /*点击搜索图标，搜索框显示  结束*/

    /*点击关闭图标，搜索框隐藏  开始*/
    $("#close-btn").click(function() {
        $(".searchbox").removeClass("scale");
    });
    /*点击关闭图标，搜索框隐藏  结束*/

    /*返回顶部显示/隐藏  开始*/
    var top = 0;
    $(window).scroll(function() {
        top = $(this).scrollTop();
        if (top >= 60) {
            $(".top").css("display", "block");
        } else {
            $(".top").css("display", "none");
        };
    });
    /*返回顶部显示/隐藏  结束*/

    /*点击返回顶部动画  开始*/
    $(".top").click(function(){
        $("body,html").stop().animate({scrollTop:0},300);
    });
    /*点击返回顶部动画  结束*/

    /*课程块状排列时*/
    /*鼠标悬停在课程上时相应动画  开始*/

    $(".course-item").mouseenter(function() {
        var courseList = $("#c-l").attr("class");
        if (courseList == "course-list") {
            $(this).find(".cover").stop().animate({ "opacity": "1" });
            $(this).find(".clect").show();
            $(this).find(".player-icon").stop().animate({ "opacity": "1" });
            $(this).find(".course-info .level").css("display", "block");
            $(this).find(".num-icon .num").css("display", "block");
            $(this).find(".course-info p").stop().animate({ "height": "52px", "opacity": "1", "display": "block", "margin-bottom": "10px" });
            $(this).find(".course-info").stop().animate({ "height": "175px" });
        } else if (courseList == "course-list1") {
            $(this).find(".cover").stop().animate({ "opacity": "1" });
            $(this).find(".clect").show();
            $(this).find(".player-icon").stop().animate({ "opacity": "1" });
        }
    });
    $(".course-item").mouseleave(function() {
        var courseList = $("#c-l").attr("class");
        if (courseList == "course-list") {
            $(this).find(".cover").stop().animate({ "opacity": "0" });
            $(this).find(".clect").hide();
            $(this).find(".player-icon").stop().animate({ "opacity": "0" });
            $(this).find(".course-info .level").css("display", "none");
            $(this).find(".num-icon .num").css("display", "none");
            $(this).find(".course-info p").stop().animate({ "height": "0", "opacity": "0", "display": "none", "margin-bottom": "0" });
            $(this).find(".course-info").stop().animate({ "height": "88px" });
        } else if (courseList == "course-list1") {
            $(this).find(".cover").stop().animate({ "opacity": "0" });
            $(this).find(".clect").hide();
            $(this).find(".player-icon").stop().animate({ "opacity": "0" });
        }
    });
    /*鼠标悬停在课程上时相应动画  结束*/

    /*课程排列方式转换  开始*/
    $(".sort-list").click(function() {
        $(".course-info .level").css("display", "block");
        $(".num-icon .num").css("display", "block");
        $(".course-info p").css({ "height": "36px", "opacity": "1", "display": "block", "margin-bottom": "10px" });
        $("#c-l").removeClass("course-list").addClass("course-list1");
    });
    $(".sort-block").click(function() {
        $(".course-info .level").css("display", "none");
        $(".num-icon .num").css("display", "none");
        $(".course-info p").css({ "height": "0", "opacity": "0", "display": "none", "margin-bottom": "0" });
        $("#c-l").removeClass("course-list1").addClass("course-list");
    });
    /*课程排列方式转换  结束*/

    /*内容区页码切换  开始*/
    $(".pg-num").click(function(){
        $(this).addClass("pg-current").siblings().removeClass("pg-current");
        if($(this).text() != 1){
            $(".pg-index").removeClass("pg-no");
            $(".pg-pre").removeClass("pg-no");
        }
    });
    /*内容区页码切换  结束*/
});
