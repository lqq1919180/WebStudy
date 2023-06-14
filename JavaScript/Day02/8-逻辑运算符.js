// 进行引用数据类型比较 == === 是一样的 只比较引用地址
// var obj = {
//     name:'zhangsan',
//     age:12
// }
// var obj1={
//     name:'zhangsan',
//     age:12
// }
// var obj2 = obj1;
// console.log(obj == obj1);
// console.log(obj === obj1);
// console.log(obj2 === obj1);

// console.log(10 != 10);
// console.log(9 != 10);
// console.log('9' != 10);
// console.log('9' !== 10);
// console.log(10 !== 10);

// true转换为数值是1 false转换为数值是0
// console.log(1 > true); //false
// console.log(1 >= true); //true
// console.log(1 > '0'); //true
// console.log(1 > null); //true
// console.log(1 > 'hello'); //false
// console.log(9 / 0 > 1); //false 正无穷字符串/NaN和数字进行比较 false
//正无穷数字 和数字比较 表达式成立true 表达式不成立false

// console.log('134565353' > '5'); //false
// console.log('134545353' > +'5'); //true

console.log('1' < '5'); //true
console.log('11' < '5'); //true
console.log('be' > 'b'); //true
console.log('be' < 'b'); //false
