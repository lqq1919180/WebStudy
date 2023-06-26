/**
 * 块级作用域 if(){}    for(){}
 */
// if (true) {
//     var a = 10;
// };
// console.log(a);
/**
 * 函数内作用域 (局部作用域) 函数内部的变量函数外部是无法获取 
 * 不使用var声明的变量也是全局变量 a = 10；
 * 函数外的作用域(全局作用域) 函数内部可以获取函数外部的变量
 */
// var v1 = 10;
// v2 = 20;
// function foo () {
//     var a = 30;
//     var b = 30;
//     console.log(v1, v2);
// }
// foo();
// console.log(a, b); //报错 函数外部获取不到函数内部变量

// var a = 1;
// function foo () {
//     // var a;
//     console.log(a, "第二次");// undefined
//     a = 2;
//     console.log(a, '第三次');// 2
//     var a = 3;
//     console.log(a, '第四次');// 3
// }
// console.log(a, '第一次');// 第一行代码 1
// foo();
// console.log(a, '第五次');

var a = 10;
function foo () { 
    console.log(a); //undefined
    var a = 100;
    console.log(a); //100
    function fn () { 
        console.log(a); //undefined
        var a = 200;
        console.log(a); //200
    }
    fn()
}
foo();