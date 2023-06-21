/**
 * 拼接两个或者两个以上的数组 concat
 * 给谁拼接 谁调用concat
 * 参数:要拼接的数组         返回值:返回拼接好的新数组     修不修改原数组:不修改原数组
 */
// var arr = [1, 2, 3];
// var arr1 = [4, 5, 6];
// var arr2 = [7, 8, 9];
// var res = arr.concat(arr1, arr2);
// console.log(res, '返回值');
// console.log(arr, '修不修改原数组');

/**
 * slice 从数组中截取数组元素
 * 参数:start end    返回值:返回 包含截取元素的数组(从开始截取到末尾，不包含末尾)               修不修改原数组:不修改
 * 参数:start        返回值:返回 包含截取元素的数组(从开始位置截取到数组末尾为止)    修不修改原数组:不修改
 * 参数:负数          返回值:返回 包含截取元素的数组(从倒数第几位截取到末尾结束)     修不修改原数组:不修改
 * 参数:负数 负数     返回值:返回 包含截取元素的数组(从倒数第几位截取到倒数第几位结束 **但结果不包含第二个参数)   修不修改原数组:不修改
 */
// var arr = [1, 2, 3, 4, 5];
// var res = arr.slice(2, 4); //表示从开始位置 截取到末尾 不包含末尾
// var res = arr.slice(2); //表示从 开始位置 截取到 数组末尾为止
// var res = arr.slice(-3); //表示从倒数第几位截取到末尾结束
// var res = arr.slice(-3,-2); //从倒数第几位截取到倒数第几位结束 但结果不包含第二个参数
// console.log(res, arr);

/**
 * splice 表示添加删除数组元素
 * 
 * 参数:index howmany>0  2 2 表示从下表为2的位置删除2项数组元素  返回值:删除元素所组成的新数组   修不修改原数组:修改原数组
 * 
 * (splice(2,1,'tom',xxx)) 参数:index howmany>0 item 表示从下标为2的位置删除1项 并插入n项
 * 返回值:删除数组元素组成的新数组   修不修改原数组:修改
 * 
 * splice(2,0,xxx)参数:index howmany item 表示从下标为2的位置开始增加数组元素
 * 返回值:空数组 修不修改原数组:修改
 * 
 * splice(正数) 参数:index 表示从下标为正数位置删除末尾结束
 * 返回值:删除数组元素组成的新数组 修不修改原数组:修改
 * 
 */
var arr = [1, 2, 3, 4, 5];
// var res = arr.splice(2, 2);
// console.log(res, arr);

// var res = arr.splice(2, 1, 'tom');
// console.log(res, arr);

// var res = arr.splice(2, 0, 'tom', 'jerry');
// console.log(res, arr);

// var res = arr.splice(3);
// console.log(res, arr);

// var res = arr.splice(-2); //表示从倒数第2项开始删除，到末尾结束
// var res = arr.splice(-2, 1); //表示从倒数第2项开始删除1项
var res = arr.splice(-2, -1,'tom'); //-1<0 不删除元素 并且添加1项新的元素到数组
console.log(res, arr);