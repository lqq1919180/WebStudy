/**
 * 1.函数声明
 * 函数体执行到return结束 没写return 执行到 } 结束 return 后面不写代码 
 */
// function fn (形式参数) {
//     // 形式参数接受实际参数
// }
// // 函数调用 函数名()
// fn(实际参数);
// function add (a, b) {
//     console.log(a + b);
//     // 函数内部不写返回值 返回undefined
//     return a + b;
//     // 一般情况下 写在return后面的代码不生效    变量提升
//     // var c = 10;
//     // console.log(a + b); // 不再执行
// }
// var result = add(1, 2);
// console.log(result);


/**
 * 2.函数表达式 匿名函数赋值给一个变量
 */
var sum = function (a, b) {
    console.log(a + b);
};
sum(1, 2, 3, 4, 5);