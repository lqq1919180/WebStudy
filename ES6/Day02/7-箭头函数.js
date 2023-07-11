// (形式参数) => {函数体} rest参数  arguments不在保存实际参数 

// let test = (a, ...b) => {
//     console.log(a, b);//[2,3,4,5]
// };
// test(1, 2, 3, 4, 5);

// let test = ({ name: a, age: b }) => {
//     console.log(a, b);
// };
// test({ name: 'zhangsan', age: 12 });
/**
 * 普通函数和箭头函数区别？********
 * 1.普通函数this指向 全局对象 写在对象中方法 指向调用者
 * 2.箭头函数没有this this指向声明箭头函数外部作用域中的this
 * 3.普通函数使用arguments保存实际参数列表
 * 4.箭头函数使用rest参数保存实际参数列表
 * 5.表现形式箭头函数使用箭头隔开()和{} 普通使用function声明
 * 6.普通函数有原型对象，箭头函数没有原型对象
 */
function person () { }
let test = () => { };
console.log(person.prototype.constructor, (() => { }).prototype);