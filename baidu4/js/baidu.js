 $(document).ready(function() {
     /*用户名显示/隐藏  开始*/
     $("#user").mouseover(function() {
         $(".subUser").show();
     });
     $(".subUser").mouseover(function() {
         $(this).show();
     });
     $(".subUser").mouseout(function() {
         $(this).hide();
     });
     /*用户名显示/隐藏  结束*/

     /*设置显示/隐藏  开始*/
     $("#setting").mouseover(function() {
         $(".subSet").show();
     });
     $(".subSet").mouseover(function() {
         $(this).show();
     });
     $(".subSet").mouseout(function() {
         $(this).hide();
     });
     /*设置显示/隐藏  结束*/

     /*更多显示/隐藏  开始*/
     $(".more").mouseover(function() {
         $(".fold").show();
     });
     $(".fold").mouseover(function() {
         $(this).show();
     });
     $(".fold").mouseout(function() {
         $(".fold").hide();
     });
     /*更多显示/隐藏  结束*/

     /*搜图  开始*/
     $(".search .cameraIcon").click(function() {
         $(".searchPart .subPic").show();
     });
     $(".searchPart .close").click(function() {
         $(".searchPart .subPic").hide();
     });

     $(".topWrap .cameraIcon").click(function() {
         $(".topWrap .subPic").show();
     });
     $(".topWrap .close").click(function() {
         $(".topWrap .subPic").hide();
     });
     /*搜图  结束*/

     /*换肤  开始*/
     /*点击"换肤"，面板下滑;点击"收起"，面板上滑  开始*/
     $(".change").click(function() {
         $(".changeSkin").slideDown(300);
     });
     $(".sFold").click(function() {
         $(".changeSkin").slideUp(300);
     });
     /*点击"换肤"，面板下滑;点击"收起"，面板上滑  结束*/

     /*鼠标悬停在换肤图片上时，效果预览显示该图片  开始*/
     $(".skinPic").mouseover(function() {
         var bg = $(this).find("img").attr("src");
         $(".skinBg").append("<img src=" + bg + ">").next().css("backgroundPosition", "0 0");
     });
     $(".skinPic").mouseout(function() {
         $(".skinBg img").hide();
         $(".bgPre").css("backgroundPosition", "-275px 0");
     });
     /*鼠标悬停在换肤图片上时，效果预览显示该图片  结束*/

     /*选中换肤图片时  开始*/
     $(".skinPic").click(function() {
         $(this).find("span").css("display", "block"); //选中标志显示
         $(this).siblings().find("span").css("display", "none"); //其他标志隐藏
         var bg = $(this).find("img").attr("src"); //获取图片的地址
         $("body").css({ "background": "url(" + bg + ") no-repeat", "backgroundSize": "100% 100%" }); //背景图
         window.localStorage.setItem('skin', bg);
         $(".skinPreview").css({ "background": "url(" + bg + ") no-repeat", "backgroundSize": "264px 180px" }); //预览视图
         $(".skinChosen").css("display", "block"); //'不使用皮肤'显示

         $("header").addClass("csHeader");
         $(".weather").addClass("csWeather");
         $(".otherTool a").addClass("csA");
         $(".menu").addClass("csA");
         $(".other").addClass("csA");
         $(".logo").attr("src", "img/logo_white_c4d7df0.png");
         $(".search input").addClass("csInput").hover(function() {
             $(this).addClass("csHover");
         }).focus(function() {
             $(this).addClass("csFocus");
         });
         $(".search button").addClass("csButton").hover(function() {
             $(this).addClass("btnHover");
         }).focus(function() {
             $(this).addClass("btnFocus");
         }).blur(function() {
             $(this).removeClass("btnFocus");
         });
         $("footer").addClass("csFooter").find("a").addClass("csFooterA");
     });
     /*选中换肤图片时  结束*/

     /*背景图记忆  开始*/
     var skin = window.localStorage.getItem('skin');
     if (skin) {
         $("body").css({ "background": "url(" + skin + ") no-repeat", "backgroundSize": "cover" }); //背景图
         $(".skinPreview").css({ "background": "url(" + skin + ") no-repeat", "backgroundSize": "264px 180px" }); //预览视图
         $(".skinChosen").css("display", "block"); //'不使用皮肤'显示
         $("header").addClass("csHeader");
         $(".weather").addClass("csWeather");
         $(".otherTool a").addClass("csA");
         $(".menu").addClass("csA");
         $(".other").addClass("csA");
         $(".logo").attr("src", "img/logo_white.png");
         $(".search input").addClass("csInput").hover(function() {
             $(this).addClass("csHover");
         }).focus(function() {
             $(this).addClass("csFocus");
         });
         $(".search button").addClass("csButton").hover(function() {
             $(this).addClass("btnHover");
         }).focus(function() {
             $(this).addClass("btnFocus");
         }).blur(function() {
             $(this).removeClass("btnFocus");
         });
         $("footer").addClass("csFooter").find("a").addClass("csFooterA");
     };
     /*背景图记忆  结束*/

     /*点击不使用换肤时  开始*/
     $(".skinChosen").click(function() {
         $(".skinChosen").css("display", "none");
         $(".skinPic").find("span").css("display", "none");
         $("body").css("background", "none");
         $(".skinPreview").css("background", "none");
         $(".skinChosen").fadeOut(300);
         $("header").removeClass("csHeader");
         $(".weather").removeClass("csWeather");
         $(".otherTool a").removeClass("csA");
         $(".menu").removeClass("csA");
         $(".other").removeClass("csA");
         $(".logo").attr("src", "img/bd_logo1_b15c113.png");
         $(".search input").removeClass("csInput").hover(function() {
             $(this).removeClass("csHover");
         }).focus(function() {
             $(this).removeClass("csFocus");
         });
         $(".search button").removeClass("csButton").hover(function() {
             $(this).removeClass("btnHover");
         }).focus(function() {
             $(this).removeClass("btnFocus");
         });
        $("footer").removeClass("csFooter").find("a").removeClass("csFooterA");
     });
     /*点击不使用换肤时  结束*/

     /*换肤点击换页  开始*/
     var count = 0;
     $(".preIcon").click(function() {       //点击向前图标
         count = (count + 3) % 4;
         var left = parseFloat($(".skinContainer").css("left"));
         if (left == 0) {
             $(".skinContainer").animate({ "left": -587 * 3 + "px" }, 0);
         } else {
             $(".skinContainer").animate({ "left": (left += 587) + "px" }, 100);
         };
         $(".index").eq((count + 1) % 4).removeClass("currentIndex");
         $(".index").eq(count).addClass("currentIndex");
     });

     $(".nextIcon").click(function() {       //点击向后图标
         count = (count + 1) % 4;
         var left = parseFloat($(".skinContainer").css("left"));
         if (left == -587 * 3) {
             $(".skinContainer").animate({ "left": "0" }, 0);
         } else {
             $(".skinContainer").animate({ "left": (left -= 587) + "px" }, 100);
         };
         $(".index").eq((count + 3) % 4).removeClass("currentIndex");
         $(".index").eq(count).addClass("currentIndex");
     });

     $(".index").click(function() {      //点击页数索引
         $(this).addClass("currentIndex").siblings().removeClass("currentIndex");
         if ($(this).hasClass("i1")) {
             $(".skinContainer").animate({ "left": "0" }, 300);
         } else if ($(this).hasClass("i2")) {
             $(".skinContainer").animate({ "left": "-587px" }, 300);
         } else if ($(this).hasClass("i3")) {
             $(".skinContainer").animate({ "left": "-1174px" }, 300);
         } else if ($(this).hasClass("i4")) {
             $(".skinContainer").animate({ "left": "-1761px" }, 300);
         };
     });
     /*换肤点击换页  结束*/
     /*换肤  结束*/

     /*标题切换选中  开始*/
     $(".articleTitle li").click(function(){
        $(this).addClass("currentChosen").siblings().removeClass("currentChosen");
        if($(this).index() == 0){
            $(".articleTitle li i").addClass("currentI");
            $(".backScrollTitle li i").addClass("currentI");
        }else{
            $(".articleTitle li i").removeClass("currentI");
            $(".backScrollTitle li i").removeClass("currentI");
        };

        if($(this).index() == 0){
            $(".myFocus").css("display","block").siblings().css("display","none");
            $(".backTitle1").addClass("currentChosen").siblings().removeClass("currentChosen");
        }else if($(this).index() == 1){
            $(".recommend").css("display","block").siblings().css("display","none");
            $(".backTitle2").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(document).scroll(function(){
                if( $(document).scrollTop() > 250){
                    $(".hotNews").addClass("fixedHotNews");
                }else{
                    $(".hotNews").removeClass("fixedHotNews");
                };
            });
        }else if($(this).index() == 2){
            $(".nav").css("display","block").siblings().css("display","none");
            $(".backTitle3").addClass("currentChosen").siblings().removeClass("currentChosen");
        }else if($(this).index() == 3){
            $(".video").css("display","block").siblings().css("display","none");
            $(".backTitle4").addClass("currentChosen").siblings().removeClass("currentChosen");
        }else if($(this).index() == 4){
            $(".shopping").css("display","block").siblings().css("display","none");
            $(".backTitle5").addClass("currentChosen").siblings().removeClass("currentChosen");
        };
     });

      $(".backScrollTitle li").click(function(){
        if($(this).index() == 0){
            $(".articleTitle li i").addClass("currentI");
            $(".backScrollTitle li i").addClass("currentI");
        }else{
            $(".articleTitle li i").removeClass("currentI");
            $(".backScrollTitle li i").removeClass("currentI");
        };
        if($(this).index() == 0){
            $(".firstLi").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(".myFocus").css("display","block").siblings().css("display","none");
        }else if($(this).index() == 1){
            $(".secondLi").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(".recommend").css("display","block").siblings().css("display","none");
        }else if($(this).index() == 2){
            $(".thirdLi").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(".nav").css("display","block").siblings().css("display","none");
        }else if($(this).index() == 3){
            $(".forthLi").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(".video").css("display","block").siblings().css("display","none");
        }else if($(this).index() == 4){
            $(".fifthLi").addClass("currentChosen").siblings().removeClass("currentChosen");
            $(".shopping").css("display","block").siblings().css("display","none");
        };
      });
     /*标题切换选中  结束*/

     /*点击'我的导航'左侧箭头,内容显示/隐藏  开始*/
     $(".myNav i").click(function(){
        var navBlank = $(".navBlank");
        if(navBlank.css("display") == "none"){
            $(this).addClass("rotateI");
            navBlank.slideDown();
        }else{
            $(this).removeClass("rotateI");
            navBlank.slideUp();
        };
     });
     /*点击'我的导航'左侧箭头,内容显示/隐藏  结束*/

     /*点击'返利模式'选中  开始*/
     var fanliFlag = false;
     $(".setFanli").click(function(){
        if(!fanliFlag){
            $(".fanliIcon").css("backgroundPosition","-50px -13px");
            fanliFlag = true;
        }else{
            $(".fanliIcon").css("backgroundPosition","-68px -13px");
            fanliFlag = false;
        };
     });
     /*点击'返利模式'选中  结束*/

     /*返回顶部  开始*/
     $(".backTop").mouseover(function(){
        $(this).css("background","#eee").find("span").css("display","none").siblings("p").css("display","block");
     });
     $(".backTop").mouseout(function(){
        $(this).css("background","#fafafa").find("span").css("display","block").siblings("p").css("display","none");
     });
     /*返回顶部  结束*/

     /*滚动条向下滚动，顶部搜索显示, 返回顶部显示  开始*/
     $(document).scroll(function(){
        var top = $(document).scrollTop();
         if( top == 0){
            $(".backTop").hide();
         }else if( top > 0){
            $(".backTop").show();
         };
         if( top > 164){
            $(".scrollSearch").show();
         }else{
            $(".scrollSearch").hide();
         };
    });
     /*滚动条向下滚动，顶部搜索显示, 返回顶部显示  结束*/

     /*滚动条回退时，导航栏显示  开始*/
    $(document).scroll(function(){
        if($(document).scrollTop() > 260){
            var before = $(document).scrollTop();
            console.log("before="+before);
            $(document).scroll(function(){
                var after = $(document).scrollTop();
            console.log("after="+after);

                if(after < 261){
                    $(".backScrollWrap").hide();
                }else if(after < before){
                    $(".backScrollWrap").show();
                }else{
                    $(".backScrollWrap").hide();
                };
            });
        };
    });
     /*滚动条回退时，导航栏显示  结束*/

 });
