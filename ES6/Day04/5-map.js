/**
 * 键值对的一种数据结构 键可以是任意数据类型
 */
let obj = {
    name: 'zhangsan',
    age: 12,
    [Symbol('email')]: "26810@qq.com",
};
console.log(obj);
let res = Object.entries(obj);//[name,zhangsan]
let map = new Map(res);
console.log(map, typeof map, map instanceof Object);
map.set({}, 1);
map.set([], function () { });
map.set(undefined, 'hello');
console.log(map);
/**
 * 遍历map keys values entries forEach
 */
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// for (let key of map) {
//     console.log(key, '222222');
// }
// map.forEach((value, key) => {
//     console.log(value, key, 'value是值,key是键');
// });
console.log(map.size);
// 删除某一个属性
map.delete('name');
console.log(map);
// 获取属性键对应的值
console.log(map.get('age'));
