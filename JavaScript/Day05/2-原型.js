console.log(Object);
/**
 * 每一个构造函数都有一个原型对象
 */
console.log(Object.prototype);
console.log(Object.prototype.constructor);
/**
 * ，每一个原型对象都有一个指针指向构造函数
 */
console.log(Object.prototype.constructor === Object);
/**
 * 构造函数创建的实例对象都有一个指针指向原型对象
 */
var obj = new Object();
obj.name = 'zhangsan';
console.log(obj.__proto__ === Object.prototype); //true
// 实例访问原型属性和方法 实例方法 实例属性
console.log(obj.__proto__.constructor);
console.log(obj.__proto__.toString());
console.log(obj.__proto__.valueOf());

console.log(obj.constructor === Object.prototype.constructor);

console.log(obj.valueOf() === Object.prototype.valueOf()); //false
console.log(obj.valueOf());
console.log(Object.prototype.valueOf());

console.log(obj.toString() === Object.prototype.toString()); //true
