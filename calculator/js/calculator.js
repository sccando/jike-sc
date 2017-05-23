function calculate(x, y, operator) {
    //获取输出内容区的元素并让其显示
    var text = document.getElementById('text');
    text.style.visibility = 'visible';

    //获取x输入框中的值并赋值给输出内容中的对应位置
    var x = parseFloat(document.getElementById('x').value);
    var xVal = document.getElementById('xValue');
    xVal.innerText = x;

    //获取y输入框中的值并赋值给输出内容中的对应位置
    var y = parseFloat(document.getElementById('y').value);
    var yVal = document.getElementById('yValue');
    yVal.innerText = y;

    //获取operator输入框中的值和其在输出内容中的对应位置的元素
    var operator = document.getElementById('operator').value;
    var oVal = document.getElementById('oValue');

    //获取输出内容中为结果的元素
    var result = document.getElementById('result');

    //获取除数为零时弹出提示的元素
    var tips = document.getElementById('tips');
    tips.style.visibility = 'hidden';

    //如x,y输入值不是数字时，弹出提示
    if (isNaN(x) || isNaN(y) ) {
        tips.innerText = '内容输入有误，请重新输入';
        tips.style.visibility = 'visible';
        text.style.visibility = 'hidden';
        //转换符号并计算输出
    } else if (operator == '+') {
        oVal.innerText = '+';
        result.innerText = parseFloat((x + y).toFixed(2));
    } else if (operator == '-') {
        oVal.innerText = '-';
        result.innerText = parseFloat((x - y).toFixed(2));
    } else if (operator == '*') {
        oVal.innerText = '*';
        result.innerText = parseFloat((x * y).toFixed(2));
    } else if (operator == '/') {
        oVal.innerText = '/';
        //除数为零时，输出内容隐藏，并弹出提示
        if (y == 0) {
            text.style.visibility = 'hidden';
            tips.innerText = '（除数不能为零！）';
            tips.style.visibility = 'visible';
        } else {
            result.innerText = parseFloat((x / y).toFixed(2));
        }
    } else {
        tips.innerText = '内容输入有误，请重新输入';
        tips.style.visibility = 'visible';
        text.style.visibility = 'hidden';
    }
}
