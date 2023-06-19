/**
 * 数组创建:
 * 1.使用字面量 访问数组元素 arr[index] index从0开始
 * 数组元素最大下标 arr.length-1
 */
var arr = [1, 2, 3, 4, 5];
// console.log(arr[3], arr[arr.length - 1]);
// console.log(arr[6]); //undefined
// arr[10] = 'hello';
// console.log(arr, arr.length);

/**
 * 2.使用构造函数创建数组
 *  1.如果在Array中放入的是一个number整数 表示数组长度 如果是number小数则会报错
 * 如果是其他数据类型 表示数组元素
 */
// var arr1 = new Array();
// console.log(arr1); // []

// var arr1 = new Array(10);
// console.log(arr1, arr1.length);

// var arr1 = new Array(10.0); //  若为10.2 报错 整数后小数位为0 如10.0 不报错 依然表示为数组长度
// console.log(arr1, arr1.length);

// var arr1 = new Array('10.2', null, undefined, { name: "zhangsan" });
// console.log(arr1, arr1.length);

console.log(Array, '数组构造函数');
console.log(Array.prototype, '数组原型对象');
console.log(Array.prototype.constructor === Array, '原型对象通过指针指向构造函数');
// 每一个实例都有一个指针指向原型对象
console.log(arr.__proto__ === Array.prototype, '每一个实例都有一个指针指向原型对象');

// 遍历数组 for in 循环 for循环
for (let key in arr) {
    console.log(key, '索引', arr[key]);
}
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}