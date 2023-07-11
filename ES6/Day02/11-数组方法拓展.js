/**
 * 静态方法  from of es6
 */
// function test () {
//     console.log(Array.from(arguments));
// }
// test('hello', '1', 2, 3);

// let arr1 = new Array(10);
// // let arr = Array.of(10);
// let arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr, arr1, arr instanceof Array, arr1 instanceof Array);

/**
 * 实例方法 find
 * 参数: 函数 回调函数
 * 返回值: 返回满足条件的第一个数组元素或者undefined  不修改原数组
 */
// let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let res = arr.find((item, index, arr) => {
//     // console.log(item, index, arr);
//     return item > 6;
// });
// console.log(res, arr);

/**
 * findIndex
 * 参数: 回调函数(item,index,arr)
 * 返回值: 返回满足条件的第一个数组元素的索引或者-1(找不到)  不修改原数组
 */
// let arr = [1, 2, 3, 2, 1, 3];
// let res = arr.findIndex((item, index, arr) => {
//     // console.log(item, index, arr);
//     return item > 2;
// });
// console.log(res, arr);

/**
 * include 参数: 查找的数组元素  返回值:true 或者false  不修改原数组
 */
// let arr = [1, 2, 3, 4];
// arr.includes(2);
// console.log(arr.includes(5), arr);

/**
 * fill 用于填充数组
 * 参数: 填充数组元素 返回值:返回修改后的数组 修改原数组
 */
// let arr = [1, 2, 3, 4];
// let res = arr.fill(8);
// console.log(res, arr);

/**
 * keys values entries 返回的是一个可迭代的对象
 */
// let arr = [1, 2, 3, 4, 5];
// let keys = arr.keys();
// let values = arr.values();
// let entries = arr.entries();
// console.log(keys, values, entries, arr);

/**
 * flat
 * 参数: n或者infinity 展开数组层级
 * 返回值: 返回 展开后的数组  不修改原数组
 */
// let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9,]]]];
// // let res = arr.flat(); //默认是1
// let res = arr.flat(Infinity);
// console.log(res, arr);

/**
 * flatMap flat 和map集合
 * 参数: 回调函数(item,index,arr)
 * 返回值: 返回 被展开的数组 被操作的结果     不修改原数组
 */
let arr = [1, 2, 3, 4, [5, 6, 7]];
let res = arr.flatMap((item) => {
    if (typeof item === 'number') {
        return item * 2;
    } else {
        // return item.map((item) => { return item * 2 });
        return item.map(item => item * 2);
    }
});
console.log(res, arr);