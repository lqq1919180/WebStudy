/**
 * 1.trimStart 去除字符串中头部空格 别名trimLeft
 * 2.trimEnd 去除字符串中尾部空格 别名trimRight
 */
// let str = ' hello world ';
// // 去除前后空格
// console.log('2' + str.trim() + '2');
// console.log('2' + str + '2');
// console.log(str.trimStart() + '2');
// console.log(str.trimEnd() + '2');
// console.log(str.trimLeft() + '2');
// console.log(str.trimRight() + '2');

/**
 * 1.padStart 向头部填充字符串 参数:填充完字符串的长度 填充字符串
 * 2.paddingEnd 向尾部填充字符串  参数:填充完字符串的长度 填充字符串
 */
// let str = 'es8';
// console.log(str.padStart(4));//默认填充空格
// console.log(str.padStart(4).length);
// console.log(str.padStart(4, '0'));
// console.log(str.padEnd(4, '0'));
// console.log(str.padEnd(2));//返回原字符串长度
// console.log(str.padEnd(6, 'abcd'));//填充字符加原字符长度 超多填充长度 截取
// console.log(str.padEnd(7, 'abc'));

/**
 * function  toString重新修订 获取源代码便于分析调试
 */
// function foo () {
//     // 我是一个函数

//     console.log('text');
// }
// console.log(foo.toString());

/**
 * replaceAll 将一类字符全部替换
 */
// let string = '111234';
// console.log(string.replace('1', 'x'));
// let reg = /1/g;
// console.log(string.replace(reg, 'x'));
// console.log(string.replaceAll('1', 'x'));