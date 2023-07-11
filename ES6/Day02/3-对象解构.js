/**
 * 对象解构等号左右两侧必须模式匹配 
 * 对属性解构 必须变量名和属性名同名
 */
// let { foo: foo, bar: bar } = { foo: 'hello', bar: 'world' };
// let { foo, bar } = { foo: 'hello', bar: 'world' };
// console.log(foo, bar);

// 2.变量名和属性名不同名  这个时候给变量名重命名
// let { foo: a } = { foo: 'hello', bar: 'world' };
// console.log(a);

// 3.嵌套解构
// let obj = { p: ['hello', { y: "world" }] };//hello world 解构出来 a b
// let { p: [a, { y: b }] } = obj;
// console.log(a, b);

// 4.默认值解构4
// let { a: y = 4 } = { a: 1, b: 2 };
// console.log(y);

// const [a, b, c, ...d] = [1, 2, 3, 11, 999];
// const { e, f, f1, g, ...h } = { f: 4, g: 5, i: 6, j: 7 };
// console.log(a, b, c, d, e, f, f1, g, h);//1 2 3 [11,999] undefined 4 undefined 5 {i:6,j:7}
