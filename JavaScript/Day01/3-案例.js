// 函数提升 函数优先 会提升到作用域的最前方
// foo();
// function foo () {
//     // 局部变量  (写在函数内部使用var声明的变量就是局部变量)
//     var a;
//     if (true) {
//         // var a = 3;//不存在块级作用域
//         let a = 3; //存在块级作用域，在块级作用域外部无法访问到变量x
//         //可以避免变量被其他代码污染或修改
//         console.log("inner", a);
//     }
//     console.log("outer", a);
// }
// console.log(a);//error

// 如果在函数中定义变量没有加var 该变量为全局变量
// function test() {
//     message = "hello";
// }
// test();
// console.log(message);//可以访问

// 全局作用域
// function b () {
//     a = 10;
//     return;
// }
// var a = 1;//var a; a=1;
// b();
// console.log(a); //10

//4.案例
// x = 1;
// console.log(global,'全局对象');//全局对象 x:1
// console.log(x); //1
// function y () {
//     console.log(x);//undefined
//     console.log(this.x); //1
//     var x = 2;
//     console.log(x); //2
// }
// y();
// console.log(x); //1

//5.函数作用域:局部作用域
// var a = 1;
// function b () {
//     // function a() {}
//     // a = 10;
//     a = 10;
//     function a () { }
//     // 函数优先 函数当成变量使用
// }
// b();
// console.log(a); //1