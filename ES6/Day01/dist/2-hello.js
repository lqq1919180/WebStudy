"use strict"; //使用严格模式 限制不严谨的语法

// b = 1; // 使用严格模式会报错

var b = 1;
console.log(b);
var a = 1;
// 箭头函数写法 (形式参数)=>{函数体}
var test = function test() {
    console.log(a + b);
};
test(1, 2);