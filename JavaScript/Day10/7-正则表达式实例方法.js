var reg = /hello/;
var str = 'hello world';
/**
 * 校验字符串匹配到正则表达式 test
 * 参数:要匹配正则表达式的字符串  返回值:true false
 */
console.log(reg.test(str)); // 匹配的到 true 匹配不到 false


/**
 * toString toLocaleString 转为本地特色字符串
 * valueOf 返回正则表达式本身
 */
console.log(reg.toString(), typeof (reg.toString()));
console.log(reg.toLocaleString(), typeof (reg.toLocaleString()));
console.log(reg.valueOf(), typeof (reg.valueOf()));
console.log(reg, typeof reg);