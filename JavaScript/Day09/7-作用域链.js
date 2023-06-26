/**
 * 作用域链:自由变量沿着作用域追层向上寻找的过程构成了作用域链
 * 自由变量:当前作用域中本身没有这个变量,但是想要获取到该变量对应的值
 */
// var a = 10;
// function foo () {
//     var b = 20;
//     function fn () {
//         var c = 30;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         // console.log(d); // 报错,找不到
//     }
//     fn();
// }
// foo();


var a = 10;
function fn () {
    var b = 20;
    function bar () {
        console.log(a + b);
    }
    return bar;
}
var x = fn();
b = 200;
x(); // 30