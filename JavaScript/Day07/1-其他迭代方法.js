/**
 * filter 方法过滤除符合条件的数组元素组成新数组
 * 参数:function(){}    返回值:返回符合函数表达式数组元素组成的新数组
 * 不修改原数组
 */
// var ages = [18, 23, 17, 22, 46];
// var res = ages.filter(function (item, index, arr) {
//     // console.log('filter');
//     console.log(this);
//     return item > 22;
// }, 'hello');
// console.log(res, ages);

/**
 * map方法 映射 对数组每一个元素进行处理返回一个新的数组
 * 参数:function(item,index,arr){} 返回值:返回对每一个数组元素进行处理后得到的新数组
 * 不修改原数组
 */
// var arr = [1, 2, 3, 4, 5];
// var res = arr.map(function (item, index, arr) {
//     return item * 10;
// });
// console.log(res, arr);

//批量删除 id   删除一条数据 id
var data = [
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
    { id: 4, name: 'zhaoliu' },
    { id: 5, name: 'qianqi' },
];

var res = data.map(function (item) {
    return item.id;
});
console.log(res);