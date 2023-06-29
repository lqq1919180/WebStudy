/**
 * 使用commonjs模块化规范引入momentjs
 */
var moment = require('moment');
// console.log(moment);
var now = new Date();
console.log(now);
/**
 * moment(需要处理时间日期).format(处理时间日期的格式)
 */
console.log(moment(now).format('MMMM Do YYYY, h:mm:ss a'));
