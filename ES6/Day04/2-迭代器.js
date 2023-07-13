/**
 * 只要数据结构实现了迭代器接口 就可以使用for of遍历
 */
let str = 'hello';
// 以前遍历字符串
/**
 * 1.str.split('') 遍历
 * 2.[...str] 遍历
 * 3.for循环 
 * 4.for in 循环
 * 5.Array.from()
 * 6.Array.prototype.slice.call(str,0)
 * 7.for of循环遍历字符串
*/
// for (let i = 0; i < str.length; i++) {
//     console.log(i, str[i]);
// }
// for (let key in str) {
//     console.log(key, str[key]);
// }
// let res = Array.from(str);
// console.log(res);
// let result = Array.prototype.slice.call(str, 0);
// console.log(result);

// for (let key of str) {
//     console.log(key);
// }
