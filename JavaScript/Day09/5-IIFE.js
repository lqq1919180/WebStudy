/**
 * 立即执行函数 声明的时候就调用
 * 特点: 1.页面加载的时候会立即执行一次
 *       2.拥有局部作用域 变量不会泄露
 */
// var a = function (b, c) {
//     return b + c;
// };
// console.log(a(1, 2));

/**
 * 立即执行函数 (匿名函数(形式参数){} (实际参数))
 */
// (function (a, b) {
//     console.log('我是立即执行函数', a, b);
// })(1, 2);

// var res = ((function (a) {
//     console.log('我是立即执行函数2', a);
//     // return a; //加上后 undefined 变为 hello
// })('hello'));
// console.log(res); //立即执行函数返回的结果没有被赋值给变量`res` 结果为undefined

// var i = 0;
// for (; i < 6; i++) {
//     function foo () {
//         console.log(i);
//     }
// }
// foo();//6
/**
 * 通过立即执行函数（IIFE）创建了一个局部作用域，并将循环变量i作为参数传递给这个函数
 * 然后，打印出传递给函数的参数j的值。
 */
for (var i = 0; i < 6; i++) {
    (function (j) {
        console.log(j);
    })(i); // 0 1 2 3 4 5
}

var arr = [];
// 循环遍历 往数组添加元素
for (var i = 0; i < 5; i++) {
    // 闭包 函数内部使用函数外部变量解决作用域问题
    arr[i] = (function (j) {
        return function () {
            console.log(j);
        };
    })(i);//0 1 2 3 4 
}
arr[4]();