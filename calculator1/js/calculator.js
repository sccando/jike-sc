var screen = document.getElementById('screen'); //获取屏幕
var key = document.getElementsByTagName('span'); //获取按键
var keyCode = []; //存放按键上的内容
var pointCount = 0; //记录输入数字时，小数点的数量
var preCharFlag = false; //记录前一个输入是不是运算符
var eqFlag;//记录等号是否点击过
var preDivFlag = false;//记录前一个输入是不是除号
var divFlag;//记录除数为0后是否可按键
var opFlag;//记录单运算符后是否可按键

for (var i = 0; i < key.length; i++) {
    (function(i) {
        key[i].onclick = function() {
            keyCode[i] = key[i].innerText;
            switch (keyCode[i]) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if(screen.value === '0'){
                        screen.value = keyCode[i];
                    }else if(divFlag){
                    	screen.value = keyCode[i];
                    	divFlag = false;
                    }else if(preCharFlag){
                    	screen.value += keyCode[i];
                        preCharFlag = false;
                    }else if(eqFlag || opFlag){
                    	screen.value = keyCode[i];
                    	eqFlag = false;
                    	opFlag = false;
                    }else{
                        screen.value += keyCode[i];
                        preCharFlag = false;
                    }
                    break;
                case '0':
                    if(screen.value === '0'){
                        screen.value = 0;
                    }else if(preDivFlag){
                    	screen.value = '除数不能为0！';
                    	preDivFlag = false;
                    	divFlag = true;
                    }else{
                        screen.value += keyCode[i];
                        preCharFlag = false;
                    }
                    break;
                case '.':
                    if(pointCount == 0){
                        screen.value += keyCode[i];
                        pointCount += 1;
                    }
                    //preCharFlag = true;
                    break;
                case '+':
                    if (!preCharFlag) {
                        screen.value += '+';
                        preCharFlag = true;
                        pointCount = 0;
                    }
                    break;
                case '-':
                    if (!preCharFlag) {
                        screen.value += '-';
                        preCharFlag = true;
                        pointCount = 0;
                    }
                    break;
                case '*':
                    if (!preCharFlag) {
                        screen.value += '*';
                        preCharFlag = true;
                        pointCount = 0;
                    }
                    break;
                case '/':
                    if (!preCharFlag) {
                        screen.value += '/';
                        preCharFlag = true;
                        pointCount = 0;
                        preDivFlag = true;
                    }
                    break;
                case '+/-':
                	screen.value = - (screen.value);
                	preCharFlag = false;
                	opFlag = true;
                	break;
                case 'sin':
                    screen.value = parseFloat(Math.sin(screen.value*(Math.PI/180)).toFixed(10));
                    preCharFlag = false;
                	opFlag = true;
                    break;
                case 'cos':
                    screen.value = parseFloat(Math.cos(screen.value*(Math.PI/180)).toFixed(10));
                    preCharFlag = false;
                	opFlag = true;
                    break;
                case '%':
                	screen.value /= 100;
                	preCharFlag = false;
                	opFlag = true;
                	break;
                case '√':
                	screen.value = Math.sqrt(screen.value);
                	preCharFlag = false;
                	opFlag = true;
                	break;
                case '=':
                    screen.value = parseFloat(eval(screen.value).toFixed(10));
                    preCharFlag = false;
                    eqFlag = true;
                    break;
                case '清屏':
                	screen.value = 0;
               		pointCount = 0;
                	preCharFlag = false;
                	break;
                case '':
                	screen.value = screen.value.substring(0, screen.value.length - 1);
            }
        }
    })(i);
}



//点击键码时高亮显示
var is = document.getElementsByTagName('i');
for (var a = 0; a < key.length; a++) {
    (function(a) {
        key[a].onmousedown = function() {
            is[a].style.backgroundColor = "rgba(0,0,0,.2)";
        }
        key[a].onmouseup = function() {
            is[a].style.backgroundColor = "rgba(0,0,0,0)";
        }
    })(a);
}
