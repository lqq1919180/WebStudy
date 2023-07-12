/**
 * 模板字符串  可以解析变量
 */
let name = 'zhangsan';
let age = 12;
// let str = 'name + age';
let str = `${name}+${age}`;
console.log(str);
let id = 1;
let url = `121.199.0.35:8888/findById?id=${id}`;
console.log(url);