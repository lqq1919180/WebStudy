// 静态方法 只能由构造函数本身去调用的方法 Object Array
/**
 * 1.判断当前数据类型是否是数组 Array.isArray()
 * 
 */
// var arr = [1, 2, 3, 4];
// var str = 'hello';
// var obj = { name: "zhangsan", age: 12 };
// console.log(Array.isArray(arr));
// console.log(Array.isArray(str));
// console.log(Array.isArray(obj));

/**
 * 2.将类数组对象转为数组对象 Array.from()
 */
// var str = 'hello';
// for (var i = 0; i < str.length; i++) {
//     console.log(i, str[i]);
// }
// console.log(Array.from(str));

/**
 * Array.of()创建数组
 * 参数会被当成数组元素解析
 */

var arr = Array.of(10, 'hello', {});
console.log(arr.constructor);//打印数组的构造函数  Array

// 实例方法 原型方法 存在于原型对象中

