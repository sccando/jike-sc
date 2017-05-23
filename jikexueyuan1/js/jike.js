$(document).ready(function() {
    /*点击搜索图标，搜索框显示*/
    $(".search-icon").click(function() {
        $(".searchbox").show();
    });

    /*点击关闭图标，搜索框隐藏*/
    $("#close-btn").click(function() {
        $(".searchbox").hide();
    });

    /*点击关闭图标，搜索框隐藏*/
    var top = 0;
    $(window).scroll(function() {
        top = $(this).scrollTop();
        if (top >= 60) {
            $(".top").css("display", "block");
        } else {
            $(".top").css("display", "none");
        };
    });
})
