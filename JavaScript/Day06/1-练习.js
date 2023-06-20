// nums=[2,5,7,11] target=9 返回下标[0,2]
// var nums = [2, 5, 7, 11], target = 9;
// function add (arr, target) {
//     // 数组前一项
//     for (i = 0; i < arr.length; i++) {
//         // 数组后一项
//         for (j = i + 1; i < arr.length; j++) {
//             // 前一项+后一项=target
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     } return [-1, , -1];// 如果没有找到符合条件的元素组合，则返回[-1, -1]
// } 
// var res = add(nums, target);
// console.log(res); // [0,2] 即2 + 7 = 9

/**
 * 2.重构pop方法 pop方法是实例方法 原型方法
 */
// Array.prototype.myPop = function () {
//     if (this.length > 0) {
//         // 返回值 返回删除的数组最后一项
//         var last = this[this.length - 1];
//         // 数组长度减一
//         this.length--;
//         return last;
//     } else {
//         // 数组为空
//         return undefined;
//     }
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myPop();
// console.log(res, arr);

/**
 * 重构push方法
 * 参数:添加数组元素 返回值:返回新数组的长度 修改原数组
 */
// Array.prototype.myPush = function () {
//     // 函数内部属性 arguments 专门保存实际参数的类数组对象
//     // 遍历调用myPush实际参数 把实际参数放在数组的末尾下一项
//     for (i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i];
//     }
//     return this.length;
// };
// var arr = ['hello', '10', 25];
// var res = arr.myPush('tom', 'jerry');
// console.log(res, arr);