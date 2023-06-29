/**
 * 1.实现深拷贝
 */
// 引入lodash库
var _ = require('lodash');
// 实现深拷贝 cloneDeep
// var obj = {
//     name: 'zhangsan',
//     age: 12,
// };
// var obj1 = obj;
// obj1.name = 'lisi';
// var obj1 = _.cloneDeep(obj);
// console.log(obj, obj1);

/**
 * _.chunk
 */
// var arr = [1, 2, 3, 4, 5, 6];
// var res = _.chunk(arr, 3);
// console.log(res);

/**
 * uniq 数组去重复
 */
// var arr = [1, 2, 3, 2, 1];
// var res = _.uniq(arr);
// console.log(res);

/**
 * compact 返回真值组成的数组
 */
// var arr = ["", NaN, false, 1, 'hello'];
// var res = _.compact(arr);
// console.log(res);

/**
 * drop(number) 每次从头部移除一个或者多个数组元素
 */
// var arr = [1, 2, 3];
// var res = _.drop(arr,2);
// console.log(res);

/**
 * indexOf (arr,要查找的元素,fromIndex) 查找数组元素
 */
var arr = [1, 2, 3, 4, 5, 'hello', null];
var res = _.indexOf(arr, 'hello', 6);
console.log(res);