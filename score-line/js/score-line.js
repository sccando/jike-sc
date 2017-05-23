
function graded() {
    //获取输入文本框的值
    var score = document.getElementById('score').value;
    //获取输出内容的元素
    var p = document.getElementById('text');
    //获取输出为等级的元素
    var level = document.getElementById('level');
    //获取不符要求内容时的提示元素
    var tips = document.getElementById('tips');

    //分数>100或者<0或者输入内容为空，弹出提示
    if (score > 100 || score < 0 || !score.trim() || isNaN(score) ) {
    	//错误提示内容显示，等级内容隐藏
        tips.style.visibility = "visible";
        p.style.visibility = "hidden";
    } else {
    	//等级内容显示，错误提示内容隐藏
        p.style.visibility = "visible";
        tips.style.visibility = "hidden";
    }

    //分数按10分一阶段分等级
    if (score >= 90) {
        level.innerText = "一";
    } else if (score >= 80) {
        level.innerText = "二";
    } else if (score >= 70) {
        level.innerText = "三";
    } else if (score >= 60) {
        level.innerText = "四";
    } else if (score >= 50) {
        level.innerText = "五";
    } else if (score >= 40) {
        level.innerText = "六";
    } else if (score >= 30) {
        level.innerText = "七";
    } else if (score >= 20) {
        level.innerText = "八";
    } else if (score >= 10) {
        level.innerText = "九";
    } else{
        level.innerText = "十";
    }
}
