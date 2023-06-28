/**
 * search  
 * search 方法用于检索字符串中指定的子字符串，并返回其在原字符串中的位置。
 * 在使用正则表达式作为参数时，无论是否添加 g 标志，search 方法都只返回第一个匹配的位置
 */
// // var reg = /hello/g;
// var reg = /hello/;
// var str = 'hello world hello';
// console.log(str.search(reg));
// console.log(str.search(reg));


/**
 * match 字符串匹配符合正则表达式字符串  匹配到第一次 返回数组  
 * [ 'hello', index: 0, input: 'hello world hello', groups: undefined ]
 * 如果开启全局匹配 会把所有符合正则的贝子府全部放到一个数组中
 * [ 'hello', 'hello' ]
 */
// var str = 'hello world hello';
// var reg = /hello/; //[ 'hello', index: 0, input: 'hello world hello', groups: undefined ]
// var reg = /hello/g; //[ 'hello', 'hello' ]
// console.log(str.match(reg));
// var reg = /(he)llo/; //分组则 先返回符合表达式的字符'hello' 再返回分组后字符 'he' ，index··· 、 input··· 、groups···
// var reg = /(he)llo/g; //['hello', 'hello'];
// console.log(str.match(reg));

/**
 * split 以某种形式分割字符串将其转换为数组
 */
/**
 *  /\d{3}/表示匹配任意连续三个数字。
 *  split()方法将字符串按照分隔符进行分割，
 *  将分割后的部分作为数组的元素返回
 */
// var str = 'terry123larry456tony';
// var reg = /\d{3}/;
// console.log(str.split(reg)); //[ 'terry', 'larry', 'tony' ]

/**
 * replace 满足正则表达式的内容会被替换
 * replace方法不会改变原始字符串，而是返回一个新的字符串。
 */
var str = 'javascript';
var reg = /javascript/;
var result = str.replace(reg, 'java');
console.log(result,str,reg);

