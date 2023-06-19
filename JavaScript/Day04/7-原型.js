/**
 * 原型:每个构造函数都有一个指针(prototype)指向原型对象,
 * 每一个原型对象都有一个指针(constructor)指向构造者
 * 构造函数创建的实例都有一个指针(__proto__)指向原型对象
 */
// 构造函数 new Object() new Array() Array.prototype
// 原型对象都有一个指针指向一个构造者
console.log(Object.prototype.constructor === Object);//true
var obj = {
    name:'zhangsan'
};
console.log(obj.__proto__ === Object.prototype);//true
console.log(obj.__proto__.toString());
console.log(obj.__proto__.valueOf());
// 实例调用的方法就是从原型对象中继承来
console.log(obj.toString() === Object.prototype.toString());
console.log(obj.hasOwnProperty() === Object.prototype.hasOwnProperty());