/**
 * Node.js中
 * var关键字声明的变量会被限制在当前作用域内，而不会添加在全局对象global上
 * 不使用var关键字声明的变量，默认会被添加到全局对象global上
 */
// var name = 'zhangsan'; // sayName() --> undefined
name = 'zhangsan'; // sayName() --> zhangsan
console.log(global);
var sayName = function () {
    console.log(this.name);
};
sayName();
console.log(this);//{}