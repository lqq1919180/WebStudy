/**
 * set集合 
 * 特点：内部成员值是唯一的 
 * 参数：无或者实现了迭代器接口的数据结构 数组 字符串 
 * 创建使用set构造函数 new Set()  typeof 
 * 注意：如果是基本数据类型相同的值添加两次会自动去重 
 * 但是如果是引用数据类型会添加两次 原因是引用地址不一样
 */
let set = new Set();
// console.log(set,typeof set,set instanceof Object);
// 添加内部成员 add 
set.add('hello');
set.add('world');
set.add('hello');
let arr1 = [];
set.add(arr1);
set.add([]);
let obj = {};
set.add(obj);

console.log(set);
// 删除内部成员 delete
set.delete(arr1);
console.log(set);
// 遍历set集合
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// for (let key of (set.keys())) {
//     console.log(key);
// }
// set.forEach((key, value) => {
//     console.log(key, value);
// });
/**
 * has 检验set集合有没有该内部成员
 */
console.log(set.has(obj)); //[] {} 引用地址
/**
 * 查看set内部成员个数 size
 */
console.log(set.size);

/**
 * 应用 数组去重 set
 */
// let set1 = new Set([1,2,3,4,3,2,1]);
// console.log(set1);
// let res = Array.from(set1);[1,2,3,4]
// let res = [...set1];
// console.log(res);

let set2 = new Set('hello');
console.log(set2);