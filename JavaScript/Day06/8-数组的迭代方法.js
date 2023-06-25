/**
 * 1.forEach方法 for循环升级版
 * 参数:函数(item,index,arr)       返回值: 没有返回值 给了返回值也是undefined            修不修改原数组:不修改
 * 
 */
// var arr = [1, 2, 3, 4, 5];
// var res = arr.forEach(function (item, index, arr) {
//     console.log(item,index,arr); //数组每一项 数组每一项对应得索引 数组
// });
// console.log(res, arr);

/**
 * every方法  判断数组中每一个元素是否符合内部表达式 一项数组元素不满足返回false
 * 参数:函数(item,index,arr)        返回值: true / false(只要有一项不满足就直接跳出循环)            修不修改原数组: 不修改
 */
// var arr = [1, 2, 3, 4, 5];
// var res = arr.every(function (item, index) {
//     // console.log(this,'不给迭代方法提供第二个参数默认指向全局对象global');
//     // null 和 undefined 没有意义参数也会指向global对象
//     // console.lo(this,'提供了第二个参数this指向第二个参数');
//     console.log(this,'提供了第二个参数指向第二个参数');
//     console.log('every');
//     return item > 1;
// }, {name:'zhangsan'});
// console.log(res, arr);

/**
 * some方法 对比数组每一项元素是否符合函数内部条件表达式 一项符合就为true
 * 参数:函数            返回值:true / false     修不修改原数组:不修改
 */
var ages = [18, 32, 56, 44, 22];
var res = ages.some(function (item) {
    console.log('some');
    console.log(this);
    return item > 40;
},'hello');
console.log(res, ages);