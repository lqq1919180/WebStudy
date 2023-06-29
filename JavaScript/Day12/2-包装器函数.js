// var str = 'hello';
// var res = str.split();
// console.log(res,typeof res,typeof str);

// js将其包装成了String类型 特殊引用类型  str调用方法的时候 js做了哪些事情
/**
 * 基本数据类型(string number boolean)在调用方法或者访问属性
 * 1.自动装箱 将基本数据类型包装器特殊引用类型 string 	String()
 * 2.直接访问方法或者属性 str.split("")
 * 3.自动拆箱 将特殊引用数据类型转换为基本数据类型  valueOf()  toString()
 */
// var str = new String('hello');
// console.log(str.length);
// console.log(str.substring(2));
// console.log(typeof str);
// str = 'hello';


/**
 * 给基本数据类型添加方法或者属性 str.last() 		String() 包装器函数
 */
// var str = 'hi';
// var str1 = 'hello';
// String.prototype.last = function(){
// 	console.log('我是last方法')
// }
// str.last();
// str1.last();
// console.log(str);
// // 重构split方法 字符串
// String.prototype.split = function(str){
// 	// 转换成数组 Array.from(str) [..str]
// }


/**
 * str直接调用方法 数据类型变成String类型
 */
var str = new String('hello');
str.name = 'zhangsan';
str.sayName = function(){
	console.log(this.name)
};
str.sayName();
console.log(str,typeof str,typeof (str.valueOf()),str.valueOf());