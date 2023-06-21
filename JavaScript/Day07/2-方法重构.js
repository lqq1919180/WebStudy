/**
 * 重构shift方法
 */
// Array.prototype.myShift = function () {
//     //先获取第一项数组元素
//     var first = this[0];
//     for (var i = 0; i < this.length; i++) {
//         //将后面的所有数组元素往前移动一位
//         this[i] = this[i + 1];
//     }
//     //数组长度-1
//     this.length--;
//     //返回第一项
//     return first;
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myShift();
// console.log(res, arr);

/**
 * 重构unshift方法
 */
// Array.prototype.myUnshift = function () {
//     // console.log(arguments.length);
//     //新数组长度 sum = 原数组长度 + 实参的个数(arguments的长度  arguments.length)
//     var sum = this.length + arguments.length;
//     for (i = sum; i > 0; i--) {
//         //将原数组中的数组元素向后移动argument.length位
//         if (i > arguments.length) {
//             //[xxx,xxx,1,2,3,4,5]
//             //this[6] = this[4]
//             this[i - 1] = this[i - 1 - arguments.length];
//         } else {
//             //i=1
//             //this[0] = arguments[0];
//             //this[1] = arguments[1];
//             this[i - 1] = arguments[i - 1];
//         }
//     }
//     //返回新数组的长度
//     return sum;
// };

// var arr = [1, 2, 3, 4, 5];
// var res = arr.myUnshift('tom', 'jerry');
// console.log(res, arr);

/**
 * 重构forEach方法
 */
// Array.prototype.myForEach = function (callback) {
//     //callback ---> function(item,index,arr){console.log(item,index,arr)}
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i],i,this);
//     }
// }
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myForEach(function (item, index, arr) {
//     console.log(item, index, arr);
// });

/**
 * 重构every 只要有一项不符合条件 返回false   除非都满足 才返回true
 */
// Array.prototype.myEvery = function (callback) {
//     for (var i = 0; i < this.length; i++) {
//         //找不符合条件的数组元素直接返回false 其他返回true
//         if (!callback(this[i])) {
//             return false;
//         }
//     }
//     return true;
// };

// var arr = [1, 2, 3, 4, 5];
// var res = arr.myEvery(function (item) {
//     console.log('every');
//     return item > 1;
// });
// console.log(res); // false

/**
 * 重构some 只要有一项符合条件 返回true 否则返回false
 */
// Array.prototype.mySome = function (callback) {
//     for (var i = 0; i < this.length; i++) {
//         //只要有一个数组元素符合条件 就返回true
//         if (callback(this[i])) {
//             return true;
//         }
//     }
//     return false;
// };

// const arr = [1, 2, 3, 4, 5];
// const res = arr.mySome(function (item) {
//     console.log('some');
//     return item > 5;
// });
// console.log(res); // 输出 false