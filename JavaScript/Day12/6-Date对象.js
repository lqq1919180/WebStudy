// var now = new Date();
// console.log(now);
// var now = new Date('2023-6-29');
// console.log(now)

/**
 * 方法 
 */
var now = new Date();
// 获取年份
console.log(now.getFullYear());
// 获取月份 0-11  比中国月份少1 
console.log(now.getMonth()+1);
// 获取日期
console.log(now.getDay());//0 -6 1-6 0 周日
console.log(now.getDate());
// 获取小时
console.log(now.getHours());
// 获取分钟
console.log(now.getMinutes());
// 获取秒
console.log(now.getSeconds());
// 获取时间戳 
console.log(now.valueOf());