/**
 * 字符集合 
 * [abc0-9] 查找方括号之间的任何字符 含有其中之一返回true
 * [^xyz] 反义字符组 它匹配任意不在括号内的字符 只要含有除xyz外字符返回true
 */
// var reg = /[abc]/;
// var reg = /[0-9]/;
// var reg = /[^xyz]/;
// // // var str = 'aaa hello world1';
// var str = 'xyzxyzxx'; //false
// // var str = 'xyza'; //true
// console.log(reg.test(str));


/**
 * 边界符   ^ 以什么开头  $  以什么结尾
 */
// 含有abc就返回true
// var reg = /abc/;
// console.log(reg.test('abc')); //t
// console.log(reg.test('aabc')); //t
// console.log(reg.test('a1abd')); //f

// 不以abc开头就返回false
// var reg = /^abc/;
// console.log(reg.test('abc')); //t
// console.log(reg.test('aabcd')); //f
// console.log(reg.test('abcd')); //t

// 不以abc结尾就返回false
// var reg = /abc$/;
// console.log(reg.test('abc')); //t
// console.log(reg.test('aabc')); //t
// console.log(reg.test('aabcd')); //f

// 精准匹配
// var reg = /^abc$/;
// console.log(reg.test('abc')); //t
// console.log(reg.test('abcd')); //f
// console.log(reg.test('aabc')); //f
// console.log(reg.test('aabcd')); //f