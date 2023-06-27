/**
 * 闭包:函数内部作用域可以访问函数外部作用域变量
 * 词法作用域:内部函数需要访问外部函数中得变量或者方法
 * 产生条件：1.嵌套函数
 * 2.函数内部存在对函数外部变量引用
 * 3.变量不会被回收机制回收 缓存变量
 * 优点:不会污染变量 变量会被维持缓存
 * 	缺点:造成内存泄漏 造成性能问题 
 */

// function func() {
//   var a = 1, b = 2;
//   function closure() {
//     return a + b;
//   }
//   return closure;
// }
// console.log(func()()); 

/**
 * 调用一次函数 变量减少一次 
 */
// function foo(){
// 	var a = 10;
// 	function fn(){
// 		a--;
// 		console.log(a)
// 	}
// 	return fn
// }
// var res = foo();
// res();//9
// res();//8
// res();//7

// function sum(){
// 	var a = 10;
// 	a--;
// 	console.log(a)
// }
// sum();9
// sum();9
// sum();9
// sum();9
// sum();9
// sum();9


function f1 () {
    var n = 999;
    nAdd = function () { n += 1; };
    function f2 () {
        console.log(n);
    }
    return f2;
}
var result = f1();
result();//999
nAdd();
result();//1000