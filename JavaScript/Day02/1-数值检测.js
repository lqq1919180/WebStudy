// 正无穷 负无穷
console.log(9 / 0); //Infinity
console.log(-9 / 0);  //Infinity
console.log(5 / 'hello'); //NaN 表示不是一个数字 not a number
var a = 'hello';
// isNaN 用来检测是否是一个数字 是数字返回false 不是数字返回true
console.log(isNaN(a));
console.log(isNaN(10));
// isFinite 用来检测是否是有效数值
console.log(isFinite(10 / 'a'));
console.log(isFinite(18 / 5));
console.log(isFinite(9 / 0));
//js 数值最小
console.log(Number.MIN_VALUE); //最小数
console.log(Number.MAX_VALUE); //最大数