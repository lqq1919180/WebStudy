// 重构 shift unshift every forEach some 方法;

/**
 * shift
 */

// Array.prototype.myShift = function () {
//     // 如果数组为空，则返回undefined
//     if (this.length === 0) {
//         return undefined;
//     }

//     // 获取数组的第一个元素
//     const firstElement = this[0];

//     // 通过循环将数组中的所有元素向前移动一位
//     for (let i = 0; i < this.length - 1; i++) {
//         this[i] = this[i + 1];
//     }

//     // 移除数组的最后一个元素
//     this.length--;

//     // 返回被移除的第一个元素
//     return firstElement;
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myShift();
// console.log(res, arr);

/**
 * unshift
 */
// Array.prototype.myUnshift=function () {
//     // 如果数组为空则返回undefined
//     if (this.length === 0) {
//         return undefined;
//     }
//     // 获取传入参数
//     var args = Array.prototype.slice.call(arguments);

//     // 将参数插入到数组开头
//     for (var i = args.length - 1; i >= 0; i--) {
//         this.splice(0, 0, args[i]);
//     }
//     return this.length;
// }
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myUnshift('tom', 'jerry');
// console.log(res, arr);

/**
 * every
 */
