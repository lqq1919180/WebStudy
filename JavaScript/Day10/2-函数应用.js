/**
 * 1.函数可以作为参数 回调函数 回头调用 主函数先执行  回调函数再执行
 * 2.函数可以作为返回值
 */
// function foo (x, y, callback) {
//     console.log(x, y);
//     callback(3, 4);
// }
// function fn (a, b) {
//     console.log(a, b);
//     var result = a + b;
//     console.log(result); // 7
//     // return a + b;

// }
// foo(1, 2, fn, function () {

// });


// var arr = [1,2,3,4,5];
// Array.prototype.forEach = function(callback){
// 	for(var i=0;i<this.length;i++){
// 		callback(this[i])
// 	}
// }
// arr.forEach(function(item){
// 	console.log(item)
// })


// function A (callback) {
//     callback();
//     console.log('我是主函数');
// }
// function B () {
//     setTimeout(function () {
//         console.log('我是回调函数');
//     }, 1000);
// }
// A(B); //js事件循环 nodejs 面试
// setTimeout(function () {
//     console.log(1);
// }, 0);
// console.log(0);
// console.log(2);

// function foo(){
//     var a = 10;
// 	return function(){
// 		console.log(a)
// 	}
// };
// var res = foo();
// res();

// var a = 10;
// function fn() {
//   var b = 20
//   function bar() {
//     console.log(a + b)
//   }
//     return bar;
// }
// var x = fn(),
// b = 200;
// x();