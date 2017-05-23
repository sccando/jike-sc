/*右上角广告  开始*/
var ad = document.getElementById('ad');
var adClose = document.getElementById('ad-close');
adClose.onclick = function() {
        ad.style.display = 'none';
    }
    /*右上角广告  开始*/

/*搜索分类  开始*/
var searchFenlei = document.getElementById('search-fenlei');
var searchItem = document.getElementById('search-item');
var items = searchItem.getElementsByTagName('a');
var fenleiArrow = document.getElementById('fenlei-arrow');
searchFenlei.onclick = function() {
    fenleiArrow.className = 'rotate';
    searchItem.style.display = 'block';
}
for (var i = 0; i < items.length; i++) {
    (function(i) {
        items[i].onclick = function() {
            searchFenlei.innerText = items[i].innerText;
            searchItem.style.display = 'none';
            fenleiArrow.className = '';
        }
    })(i);
}
/*搜索分类  结束*/

/*热搜数字  开始*/
var hotNum = document.getElementById('hot-num');
var hotNews = document.getElementById('hot-news');
var hotFlag = true;
hotNum.onclick = function() {
        if (hotFlag) {
            hotNews.style.display = 'block';
            hotFlag = false;
        } else {
            hotNews.style.display = 'none';
            hotFlag = true;
        }
    }
    /*热搜数字  结束*/

/*换肤  开始*/
var changeColor = document.getElementById('change-color');
var colors = changeColor.getElementsByTagName('span'); //获取色块
var menu = document.getElementById('menu');
var menuItem = menu.getElementsByTagName('a'); //获取变色导航
var websiteRecommend = document.getElementById('website-recommend');
var websiteItem = websiteRecommend.getElementsByTagName('a'); //获取变色推荐网站
var color;

for (var i = 0; i < colors.length; i++) {
    (function(i) {
        colors[i].onclick = function() {
            color = colors[i].id; //获取要变色块颜色名

            localStorage.setItem('key', color);

            /*导航换色*/
            for (var j = 0; j < menuItem.length; j++) {
                (function(j) {
                    menuItem[j].style.background = color;
                    if (color == 'yellow') {
                        menuItem[j].style.color = '#333';
                    }
                })(j);
            }
            /*推荐网站换色*/
            for (var n = 0; n < websiteItem.length; n++) {
                (function(n) {
                    websiteItem[n].style.color = color;
                })(n);
            }
        };
    })(i);
}
/*换肤  结束*/

var key = localStorage.getItem('key');
if (key) {
    /*导航换色*/
    for (var j = 0; j < menuItem.length; j++) {
        (function(j) {
            menuItem[j].style.background = key;
            if (key == 'yellow') {
                menuItem[j].style.color = '#333';
            }
        })(j);
    }
    /*推荐网站换色*/
    for (var n = 0; n < websiteItem.length; n++) {
        (function(n) {
            websiteItem[n].style.color = key;
        })(n);
    }
}
/*推荐网址  开始*/
var iconRecommend = document.getElementById('icon-recommend');
var recommendTip = document.getElementById('recommend-tip');
iconRecommend.onmousemove = function() {
    recommendTip.style.display = 'block';
}
iconRecommend.onmouseout = function() {
        recommendTip.style.display = 'none';
    }
    /*推荐网址  结束*/
