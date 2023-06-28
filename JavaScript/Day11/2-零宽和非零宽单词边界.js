/**
 * \b 零宽单词边界 单词和空格之间位置 
 * \B 单词边界和单词边界中间的位置 不匹配单词边界
 */
var str = 'hello world javasript';
var reg = /\bhello\b/; //index 0
// var reg = /\bello\b/; //null  匹配 ello 返回结果为null
// var reg = /\Borl\B/; //index 7
console.log(reg.exec(str));