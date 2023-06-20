// 重构方法 数组去重
var arr = [1, 5, 7, 8, { name: 'zhangsan' }];
/**
 * 1.将数组进行序列化 将数组转为json字符串 JSON.stringify()
 * 2.将数组json字符串转为数组 JSON.parse()
 */
// var res = JSON.stringify(arr);
// console.log(res, typeof res);
// console.log(JSON.parse(res));

/**
 * 将数组转为字符串
 * 1.数组调用toString()
 * 2.使用join()
 */
// var strArr = arr.toString();
// console.log(strArr, typeof strArr);

// var strArr = arr.join("-");
// console.log(strArr, typeof strArr); 