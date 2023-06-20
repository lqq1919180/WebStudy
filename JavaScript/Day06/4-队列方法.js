/**
 * 1.从开头删除数组元素 shift
 * 参数:无       返回值:返回删除的第一项数组元素      修不修改原数组:修改
 */
var arr = [1, 2, 3, 4, 5];
var res = arr.shift();
console.log(res, arr);

/**
 * 2.从数组开始部分增加元素 unshift
 * 参数:增加的数组元素   返回值:新数组的长度      修不修改原数组:修改
 */
var arr = [1, 2, 3, 4, 5];
var res = arr.unshift('tom', 'jerry');
console.log(res, arr);