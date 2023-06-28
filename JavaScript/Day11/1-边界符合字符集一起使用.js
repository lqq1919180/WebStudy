// 匹配一个单个的字符，该字符只能是"a"、"b"或"c" 有且只有任意之一返回true
// var reg = /^[abc]$/;
// console.log(reg.test('a'));//true
// console.log(reg.test('b'));//true
// console.log(reg.test('a'));//true
// console.log(reg.test('aa'));//false

// 用于匹配任意一个数字或字母(单个) 判断一个字符是否为数字或字母
// var reg = /^[0-9A-Za-z]$/;
// console.log(reg.test('a')); //true
// console.log(reg.test('A')); //true
// console.log(reg.test('!')); //false
// console.log(reg.test('123')); //false
// console.log(reg.test('2w')); //false
// console.log(reg.test('2w')); //false

// 取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
// 判断一个字符是否为数字或字母
var reg = /^[^0-9A-Za-z]$/;
console.log(reg.test('a')); //false
console.log(reg.test('A')); //false
console.log(reg.test('2')); //false
console.log(reg.test('!')); //true
console.log(reg.test(' ')); //true
console.log(reg.test('!!!')); //false