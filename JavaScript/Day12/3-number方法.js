/**
 * 1.toString 将number转为string类型
 * 2.toLocaleString 将number转为string类型
 * 3.toFixed 将number转为string类型 可以保留小数 
 */
var num = 123;
console.log(num.toString(), typeof (num.toString()));
console.log(num.toLocaleString(), typeof (num.toLocaleString()));
console.log(num.toFixed(3), typeof (num.toFixed()));
console.log(num.toExponential(), typeof (num.toExponential()));
console.log(num.toPrecision(2), typeof (num.toPrecision()));
console.log(num.valueOf(), typeof (num.valueOf()));
/**
 * 123 string
 * 123 string    
 * 123.000 string
 * 1.23e+2 string
 * 1.2e+2 string 
 * 123 number
 */