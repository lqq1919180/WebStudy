// 删除数组元素 新增数组元素
/**
 * 1.从末尾开始删除数组元素
 * 学习方法 1.方法参数 2.方法返回值 3.方法会不会修改原数组
 * 方法:pop() 参数 无 返回值:删除掉的数组元素    修不修改原数组:修改
 * 重构pop方法 实现底层逻辑 myPop arr.myPop() Array.prototype.xxx = function() {}
 */
var arr = [1, 2, 3, 4, 5];
console.log(arr.pop(), '返回值');
console.log(arr, '');
console.log(arr.__proto__.pop() === Array.prototype.pop()); //true

/**
 * 新增数组元素 push 从末尾增加
 * 1.参数 2.返回值 3.修不修改原数组
 * push 参数:想要添加的数组元素 返回值:返回新数组的长度  修补修改原数组:修改
 * 重构push方法 要求实现和push一样的效果 arr.myPush() 数组原型对象中
 */
var res = arr.push('tom', 'leery');
console.log(res, arr);
