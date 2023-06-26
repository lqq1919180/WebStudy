/**
 * this 是函数赖以执行的环境对象
 * 1.关注this被谁拥有 2.关注拥有this方法被谁调用  this就指向谁
 * 
 * 1.单独使用this     this在nodejs指向当前模块    this在浏览器指向全局对象window
 * 2.函数内部使用this   this指向全局对象 global window
 * 3.方法中使用this     this指向拥有该方法的调用者
 * 4.在事件中使用this  this指向接收事件的元素
 * 5.显示函数绑定时，可以更改this指向
 */
// console.log(this);//{} 当前模块
// function foo () {
//     console.log(this); // global object
// }
// foo();

// name = 'larry';
// var obj = {
//     name: 'terry',
//     sayName: function () {
//         console.log(this);
//         console.log(this === obj);
//         console.log(this === globalThis);
//         console.log(this.name);
//     }
// };
// obj.sayName();// this -->obj对象  this===obj true  this.name -->terry
// var x = obj.sayName;
// x(); // this -->global  this===obj false  this===globalThis true

var obj1 = {
    name: 'terry',
};
var obj2 = {
    sayName: function () {
        console.log(this.name, this);
    }
};
// call 方法修改this指向 参数:this执行的环境对象
obj2.sayName.call(obj1);