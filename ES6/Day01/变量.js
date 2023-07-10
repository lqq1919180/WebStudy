/**
 * ES5 声明变量使用var
 * 特点:1.会进行变量提升,不存在暂时性死区
 * 2.可以重复声明
 * 3.不存在块级作用域 if()  for(){}
 * ES6 声明变量 let const
 * let特点:
 *   1.不会进行变量提升, 存在暂时性死区(未声明该变量之前无法访问变量)
 *   console.log(a); let a = 1; //报错
 *   2.可以声明的时候不进行初始化 let a;
 *   3.不可以重复声明但可以重新赋值; 
 *   let a = 1; let a = 'hello'; //报错
 *   let a = 1; a = 'hello'; // a --> 'hello'
 *   4.存在块级作用域 代码块作用域变量无法被代码块外作用域访问
 * const特点：
 *   1.不会变量提升 存在暂时性死区
 *   2.声明变量的时候必须初始化(赋值) const a;
 *   3.不可以重复声明并且不可以重新赋值 
 *   4.具有块级作用域 代码块作用域变量无法被代码块外作用域访问
 *   5.一般用于声明常量
 *   6.const不可以对声明好的基本数据类型进行值的修改，但引用数据类型可以插入值
 */

// console.log(a);
// let a = 1;
// // let a = 2; //let 声明不能重复声明
// a = 2; // 可以重新赋值
// console.log(a);
// if (true) {
//     let b = 10;
// }
// console.log(b);

// console.log(a);
// const a = 1;
// //const a = {}; //再次声明 报错
// //a = {}; // const 声明 (为常量) 不能重复声明也不能重新赋值
// console.log(a);
// if (true) {
//     const b = 10;
// }
// console.log(b);

const obj = [1,2,3];
obj[4] = 'terry';
console.log(obj);