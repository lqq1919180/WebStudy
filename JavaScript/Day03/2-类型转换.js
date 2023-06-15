// 显式类型转换
/**
 * 将其他类型转换成string类型
 * 1.使用字符串拼接 + ""
 * 2.使用toStrong()函数
 * 3.使用String()包装器函数
 */
// var a = 10;
// var b = true;
// 1.字符串拼接
// console.log(a + "", typeof (a + ""));
// console.log(b + "", typeof (b + ""));
// console.log(null + "", typeof (null + ""));
// console.log(undefined + "", typeof (undefined + ""));

//2.使用toString方法  null和undefined不可以调用toString 没有包装器函数
// console.log(a.toString(),typeof (a.toString()));
// console.log(b.toString(), typeof (b.toString()));
// console.log(null.toString(), typeof (null.toString())); //报错
// console.log(undefined.toString(), typeof (undefined.toString())); //报错

// 3.使用String()包装器函数 将其他数据类型转换为string类型
// console.log(String(a),typeof String(a));
// console.log(String(b),typeof String(b));
// console.log(String(null),typeof String(null));
// console.log(String(undefined),typeof String(undefined));

// 将其他number转为string 调用toString()放入一些进制参数
// var a = 10;
// console.log(a.toString());
// console.log(a.toString(2)); //将number转化为2进制string
// console.log(a.toString(8)); //将number转化为8进制string
// console.log(a.toString(16)); //将number转化为16进制string

/**
 * 将其他数据类型转换为boolean
 * 1.使用Boolean()包装器函数 true false
 * 2.使用!!取反
 */
// console.log(Boolean(10), typeof Boolean(10));
// console.log(Boolean('hello'), typeof Boolean('hello'));
// console.log(Boolean(null), typeof Boolean(null));
// console.log(Boolean(undefined), typeof Boolean(undefined));

// console.log(!10, typeof (!10));
// console.log(!'hello', typeof (!'hello'));
// console.log(!null, typeof (!null));
// console.log(!undefined, typeof (!undefined));

/**
 * 将其他数据类型转为number类型
 * 1.使用+号
 * 2.使用Number包装器函数
 * 3.使用parseInt()方法 取整数
 * 4.使用parseFloat方法 保留小数
 */

var a = '10';
var b = true;
var c = false;

// console.log(+a, +b, +c, typeof (+a), typeof (+b), typeof (+c));
// console.log(+null, +undefined, typeof (+null), typeof (+undefined));

// console.log(Number(a), typeof Number(a));
// console.log(Number(b), typeof Number(b));
// console.log(Number(c), typeof Number(c));
// console.log(Number(null), typeof Number(null));
// console.log(Number(undefined), typeof Number(undefined));


// console.log(Number("123"));; //123  如果仅包含数值，转换为对应的数值
// console.log(Number("234.1"));; //234.1 解析为对应的小数 
// console.log(Number("+12.1"));; //12.1 首位为符号位，其余为为数值，转换为对应的数值 
// console.log(Number("1+2.3"));; // NaN 符号位出现在其他位置，解析为NaN 
// console.log(Number("0xa"));; //10 如果仅包含十六进制格式，转为为对应的十进制的值
// console.log(Number("010"));; //10【注意】不会当做八进制被解析，结果为10。 
// console.log(Number(""));; // 0 空字符串被转换为0 
// console.log(Number("123ac"));; // NaN 包含其他字符： NaN 
// console.log(Number(12));; //12

// console.log(parseInt(a),typeof parseInt(a));//10 
// console.log(parseInt(b),typeof parseInt(b));//NaN
// console.log(parseInt(c),typeof parseInt(c));//NaN
// console.log(parseInt(null),typeof parseInt(null));//NaN
// console.log(parseInt(undefined),typeof parseInt(undefined));//NaN

// console.log(parseInt("123"));; //123；如果仅包含数值，转换为对应的数值
// console.log(parseInt("234.1"));; //234；小数点后面的数值省略 
// console.log(parseInt("+12.1"));; //12； 首位为符号位，其余为为数值，转换为整数 
// console.log(parseInt("1+2.7"));; //1； 符号位出现在其他位置，保留符号位前面的数值 
// console.log(parseInt("0xa"));; //10； 如果仅包含十六进制格式，转为为对应的十进制的值
// console.log(parseInt("010"));; //10； 【注意】不会当做八进制被解析，结果为10
// console.log(parseInt(""));; //NaN；空字符串被转换为NaN
// console.log(parseInt("1+2.3"));; //1;如果首位为数值，依次向后解析，找到连续的数值，直到遇到第一个非数值的，将之前获取的数值转换为Number返回 parseInt("123ac"); //123;

console.log(parseFloat('10.1'),typeof parseFloat('10.1'));
console.log(parseFloat(null),typeof parseFloat(null));
console.log(parseFloat(undefined),typeof parseFloat(undefined));
console.log(parseFloat(true),typeof parseFloat(true));
console.log(parseFloat(""),typeof parseFloat(""));