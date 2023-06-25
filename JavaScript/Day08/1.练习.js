/**
 * 重构map
 */
// Array.prototype.myMap = function (callback) {
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//         newArr.push(callback(this[i], i, this));
//     }
//     return newArr;
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myMap(function (item, index, arr) {
//     return item + 5;
// });
// console.log(res);


// Array.prototype.myFilter = function (callback) {
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             newArr.push(this[i]);
//         }
//     }
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.filter(function (item) {
//     return item > 3;
// }
// );
// console.log(res);


/**
 * 使用递归进行数组扁平化 核心思路:循环遍历每一个数组元素 不是数组的数组先添加到新数组中
 * 是数组的数组元素循环遍历 flat(数组元素)
 * 扁平化数组 数组排序 冒泡排序
 */
// var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];//[1,2,3,4,5,6,7,8,9,10]
// function flat (arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             newArr = newArr.concat(flat(arr[i]));
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(flat(arr));

/**
 * 2.使用api进行数组扁平化
 */
// var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];//[1,2,3,4,5,6,7,8,9,10]
// function flat (arr) {
//     // console.log(arr.toString().split(","));
//     // var res = arr.toString().split(","); //["1", "2", "3", "4", ....];
//     // return res.map(function (item) {
//     //     return Number(item);
//     // });
//     return arr.toString().split(",").map(function (item) {
//         return +item;
//     })
// }
// console.log(flat(arr));


/**
 * 3.使用some方法扁平化数组
 */
// var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];//[1,2,3,4,5,6,7,8,9,10]
// function flat (arr) {
//     while (arr.some(function (item) {
//         return Array.isArray(item);
//     })) {
//         console.log(arr, '上一次结果');
//         arr = [].concat(...arr);
//     }
//     return arr;
// }
// console.log(flat(arr));
// var arr = [1, 2, 3, 4, 5];
// //拓展运算符 左侧展开
// console.log(...arr);


/**
 * 4.使用flat方法进行数组扁平化处理
 */
// var arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];//[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.flat(Infinity));

/**
 * 字符串 var str = 'hello worldthree akhdkahk sadsxmaalj'
 */
// var str = 'hello worldthree must rerrylarryf';
// var res = str.split(" ");//['hello', 'worldthree', ...];
// var max = 0, result = 0;//接受最长单词的长度
// for (var i = 0; i < res.length; i++) {
//     if (res[i].length > i++) {
//         max = res[i].length;
//     }
// }
// console.log(max, '最长字符串长度', res[result], '最长字符串');
console.log(null && undefined);
