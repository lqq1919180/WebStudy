// 含有\n \r 以外的任意字符 返回true
// var str = '\nhello\r world js'; //true
// // var str = '\n\r'; //false
// // var str = '\n\r Hello'; //true
// var reg = /./;//匹配除\n\r之外的任意字符
// console.log(reg.test(str));

/**
 * 字符类 \d 等同于[0-9] 匹配任意数字 
 * \D 等同于[^0-9] 不匹配数字
 */
// 含有数字返回true
// var reg = /\d/;
// console.log(reg.test('12'));//true
// console.log(reg.test('0'));//true
// console.log(reg.test('a'));//false
// console.log(reg.test('a11'));//true

// 含有除数字以外任意字符 返回true (有且只有数字) 返回false
// var reg = /\D/;//匹配任意字符除数字 [^0-9]
// console.log(reg.test('1')); //false
// console.log(reg.test('1a')); //true
// console.log(reg.test('a')); //true
// console.log(reg.test('!')); //true
// console.log(reg.test(' ')); //true

/**
 * \w 匹配[0-9A-Za-z_] 
 * 匹配包括下划线的任意单个字符，包括A~Z，a~z，0~9和下划线"_"，
 * 等效于  [a-zA-Z0-9_] 可以匹配由字母、数字和下划线组成的任意字符串 
 *                      包含其中之一则返回true
 * 
 * \W 匹配[^0-9A-Za-z_]
 * 匹配任何非单词字符。它匹配任何除了字母、数字和下划线以外的字符。
 * 等效于[^a-zA-Z0-9_]  包含除了它们以外的字符 则返回true                       
 */
// var reg = /\w/;
// console.log(reg.test('a'));//true
// console.log(reg.test('A'));//true
// console.log(reg.test('_'));//true
// console.log(reg.test('1'));//true
// console.log(reg.test('  1'));//true
// console.log(reg.test('!'));//false
// console.log(reg.test(' '));//false

// var reg = /\W/;//[^0-9A-Za-z_]
// console.log(reg.test('0'));//false
// console.log(reg.test('a'));//false
// console.log(reg.test('A'));//false
// console.log(reg.test('_'));//false
// console.log(reg.test('123abc'));//false
// console.log(reg.test('!!'));//true
// console.log(reg.test('123abc!!'));//true
// console.log(reg.test('@'));//true
// console.log(reg.test(' '));//true


/**
 * \s 匹配任何unicode空白符 空格 制表符 换行符 [\f\n\t\r]
 * \S 匹配除以上字符之外得任意字符 [^\f\n\t\r]
 */
// 可以用来检查一个字符串中是否包含空白字符。
// 含有则返回true
// var reg = /\s/;
// console.log(reg.test(' '));//true
// console.log(reg.test('\n'));//true
// console.log(reg.test('a'));//false
// console.log(reg.test('1'));//false
// console.log(reg.test('hello world'));//true
// console.log(reg.test('helloworld'));//false

// 匹配任意非空白字符
// 只要含有除 unicode空白符 空格 制表符 换行符 外的字符就返回 true
var reg = /\S/;
console.log(reg.test('1'));//true
console.log(reg.test('a'));//true
console.log(reg.test('!'));//true
console.log(reg.test(' '));//false
console.log(reg.test('\n'));//false
console.log(reg.test('1 2'));//true
console.log(reg.test('\nabc'));//true