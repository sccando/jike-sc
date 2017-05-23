/*
var arr = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
var obj = {}; //此对象中存放字符及其数量

//遍历数组arr，统计其中每个字符的数量  
for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i]; //arr1中包含了arr中所有字符
    if (obj[arr1]) {
        obj[arr1]++; //obj中有这个字符，就把其数量加1
    } else {
        obj[arr1] = 1; //如没有，这个字符的数量就等于1
    }
}

//遍历对象obj，找到出现最多次数的字符及次数
var num = 0;
var key = null;
for (var temp in obj) {
    if (obj[arr1] > num) {
        num = obj[arr1];
        key = arr1;
    }
}

//遍历数组arr，找到最多次数的字符出现的下标
var arr2 = new Array(); //此数组存放下标
var b = 0;
for (var s = 0; s < arr.length; s++) {
    if (key == arr[s]) {
        arr2[b++] = s;
    }
}

alert("出现最多的字符是：" + key + " , 共出现" + num + "次。出现的下标位置分别为：" + arr2.join('、') + "。")
*/


function findNum(data) {
    var dataBox = {};	//存放数据
    var maxChar = '';	//存放出现最多次数的字符
    var maxCount = 0;	//存放出现最多的次数

    for (var i = 0; i < data.length; i++) {
        var att = data[i];
        if (!dataBox[att]) {
            dataBox[att] = [];
        }
        dataBox[att].push(i);

        if (dataBox[att].length > maxCount) {
            maxChar = data[i];
            maxCount = dataBox[att].length;
        }
    }
	
	alert("出现最多的字符是：" + maxChar + " , 共出现" + maxCount + "次。出现的下标位置分别为：" + dataBox[maxChar] + "。")

}
