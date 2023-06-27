/**
 * 1.解决全局作用域 将var改为let let创建自己得局部作用域
 * 2.使用立即执行函数创建局部作用域 
 * 
 */
// var arr = [];
// for(var i=0;i<5;i++){
// 	arr[i] = (function(j){
// 		console.log(j)
// 	})(i)
// }

var arr = [];
for(var i=0;i<5;i++){
	arr[i] = (function(j){
		return function(){
			console.log(j)
		}
	})(i)
}
arr[4]();