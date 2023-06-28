/**
 * 匹配到字符串(捕捉 缓存起来)  在引用之前需要校验字符串
 */
// var reg = /(\d{4}-(\d{2})-(\d{2}))/;
// var str = '2023-06-28';
// reg.exec(str);
// // console.log(reg.exec(str));
// console.log(RegExp.$1); //引入第一次捕捉到的结果
// console.log(RegExp.$2); //引入第二次捕捉到的结果
// console.log(RegExp.$3); //引入第三次捕捉到的结果
/**
 * 嵌套分组的捕获
 */

// var reg = /((apple) is (a (fruit)))/;
// var str = "apple is a fruit";
// reg.exec(str);
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);
// console.log(RegExp.$4);

/**
 * 反向引用 \1 表示引用第一个捕获组匹配到的内容
 */

// var reg = /(\w{3}) is \1/;
// console.log(reg.test('kid is kid')); //true
// console.log(reg.test('one is one')); //true
// console.log(reg.test('kid is one')); //false
// console.log(reg.test('one is kid')); //false

/** 
 * `\6`表示引用第6个括号捕获组的内容，而`\1`表示引用第1个括号捕获组的内容。
 *  在给定的正则表达式中，`/(\w{3}) is \x06/`，只有一个括号捕获组 `(\w{3})`。
 *  所以`\1`是有效的，而`\6`不是有效的，因为没有第6个括号捕获组。
*/

// var reg = /(\w{3}) is \x06/;
// console.log(reg.test('kid is kid')); // false
// // console.log(reg.test('kid is \6'));  // true
// /**
//  * 此处\6 显示问题 Octal escape sequences are not allowed. Use the syntax '\x06'
//  * 解释 ECMAScript 5 和之前的版本中，八进制转义字符是被允许
//  * 但是在 ECMAScript 2015 (ES6) 版本中被弃用了
//  * 可以使用十六进制转义字符替代八进制转义字符，使用'\x06'表示八进制的转义字符。
//  * */
// //更改后
// console.log(reg.test('kid is \x06'));  // true
