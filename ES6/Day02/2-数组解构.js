/**
 * 等号左右两侧模式匹配才可以进行解构
 */
// 完全解构;
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// let [a, b, c, d, e] = [1, 2, 3, [4, 5], 6];
// console.log(a, b, c, d, e);

// 不完全解构;
// let [a, b, c, [d], e] = [1, 2, 3, [4, 5, 6], 7];
// console.log(a, b, c, d, e);

// 集合解构 拓展运算符;
// let [a, ...b] = [1, 2, 3, 4, 5];
// console.log(a, b);

// 默认值解构 匹配值得 匹配到返回匹配到值 匹配不到返回默认值;
// let [a = 1, b = 2, c = 3] = [4, 5, 6]; 4, 5, 6;
// let [a = 1, b = 2, c = 3] = []; // 1 2 3
// console.log(a, b, c);

// 默认值可以是函数;
// function test () {
//     console.log('我是函数');

// }
// // let [a=test()] = [1];//1
// let [a = test()] = [];//test()函数运行得结果
// console.log(a);

// 使用拓展运算符;
// let a = [1, 2, 3, 4, 5];//b1001
// let [...arr] = a;
// console.log(arr === a); //false