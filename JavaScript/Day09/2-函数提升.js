/**
 * 函数提升 函数会提升到当前作用域的最顶部 var声明变量会提升到当前作用域顶部
 */

// function foo () {
//     console.log('我是一个函数');
// }
// var foo;
// foo();
// foo = '';


function foo () {
    console.log('我是一个函数');
}
foo();
var foo = 'hello function';
console.log(foo);