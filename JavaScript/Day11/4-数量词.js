/**
 * 1.* 匹配字符>=0次 
 * 2.+ 匹配字符>=1次
 * 3.? 匹配字符0次 1次 
 * 4.{n} 匹配字符 n次
 * 5.{n,} 匹配字符>=n次 
 * 6.{n,m} 匹配字符n到m次 n=<字符<=m
 */
// * 匹配字符>=0次 符合返回true
// var reg = /^a*$/;
// console.log(reg.test(""));//true
// console.log(reg.test("a"));//true
// console.log(reg.test("aa"));//true

// + 匹配字符>=1次 符合返回true
// var reg = /^a+$/;
// console.log(reg.test(''));//false
// console.log(reg.test('a'));//true
// console.log(reg.test('aaa'));//true

// ? 匹配字符0次 1次
// var reg = /^a?$/; // 0次或者1次 
// console.log(reg.test(''));//true
// console.log(reg.test('a'));//true
// console.log(reg.test('aa'));//false
// console.log(reg.test('aaa'));//false

// var reg = /^a{3}$/;//匹配a字符3次
// console.log(reg.test('aaa')); //true
// console.log(reg.test('aaaa')); //false
// console.log(reg.test('aa')); //false

// var reg = /^a{3,6}$/;//匹配a字符3-6次
// console.log(reg.test('aa')); //false
// console.log(reg.test('aaa')); //true
// console.log(reg.test('aaaa')); //true
// console.log(reg.test('aaaaa')); //true
// console.log(reg.test('aaaaaa')); //true
// console.log(reg.test('aaaaaaa')); //false


// var reg = /^a{3,}$/;//匹配a字符>=3次
// console.log(reg.test('aaa')); //true
// console.log(reg.test('aaaa')); //true
// console.log(reg.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')); //true
// console.log(reg.test('aa')); //false


/*
*	匹配qq号: 不能以数字0开始，只能由数字组成，长度为5-11位
*/
// var reg = /^[1-9]\d{4,10}$/;
// console.log(reg.test('1112')); //false
// console.log(reg.test('26810')); //true
// console.log(reg.test('26810222222')); //true
// console.log(reg.test('268102222222')); //false


/**
 * 1.匹配身份证号
 * 不能以数字0开头，只能由数字组成，最后一位可能是x，X，数字
 */
var reg = /^[1-9]\d{16}[xX\d]$/;
console.log(reg.test('14232520230628111x')); //true
console.log(reg.test('14232520230628111a')); //false
console.log(reg.test('1423252023062811')); //false
console.log(reg.test('14232520230628112')); //false
