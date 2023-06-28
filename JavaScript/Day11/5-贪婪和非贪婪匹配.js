/**
 * 贪婪模式 默认模式 尽可能多的匹配字符 剩下得字符符合数量词继续匹配
 * 不符合直接返回null
 */
// {3,6} 匹配 正则\d等效于[0-9] 3~6次 贪婪模式下选择6次
// var reg = /\d{3,6}/g;
// var str = '12345678910';
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));
/**
 *  运行结果
 *  [ '123456', index: 0, input: '12345678910', groups: undefined ]
    [ '78910', index: 6, input: '12345678910', groups: undefined ]
    null
 */

/**
 * 非贪婪模式 尽可能少的匹配 当剩余字符串符合数量词最少匹配次数继续匹配
 * 不合符直接返回null
 */
// {3,6} 匹配 正则\d等效于[0-9] 3~6次 非贪婪模式下选择3次
var reg = /\d{3,6}?/g;
var str = '12345678';
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
/**
 * 运行结果
 *  [ '123', index: 0, input: '12345678', groups: undefined ]
    [ '456', index: 3, input: '12345678', groups: undefined ]
    null
 */