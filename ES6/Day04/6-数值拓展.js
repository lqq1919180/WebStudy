/**
 * Number isFinite isNaN
 */
// 以前 isFinite 判断一个值是否是有效数值 隐式转换 null true false '' 'number' 返回true
// console.log(isFinite(""));
// 以前 isNaN 判断是不是一个数字 空字符串、null、true、false、是数字返回false  不是返回true "" 0
// console.log(isNaN(undefined));

//只会对数值有效 不会隐式转换
// console.log(Number.isFinite(1));
// 只对NaN或者运算结果为NaN返回true 其他都返回false
console.log(Number.isNaN('222'));

console.log(Number.parseInt(12.5));
console.log(Number.parseFloat('12.345#'));

// 检验一个数是不是整数 
console.log(Number.isInteger(12.1));
console.log(Number.isInteger(12));

