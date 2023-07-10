/**
 * 在编译时进行加载 es6输出的是值的引用
 */
import { first, last } from './7-ES6模块差异';
console.log(first, last);
setTimeout(() => {
    console.log(first, last); //ren 
}, 4000);