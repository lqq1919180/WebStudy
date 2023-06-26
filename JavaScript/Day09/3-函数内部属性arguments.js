/**
 * arguments 属性 专门用来保存实际参数列表的类数组对象
 * arguments  内部属性 callee 仅当当前相关函数正在执行才可用
 */
function fn (a, b) {
    // console.log(a, b);
    // console.log(arguments.length);
    // console.log(arguments);
    // console.log(arguments[3]); // 可以通过下标访问
    // console.log(arguments.callee, 'arguments的属性');
    // console.log(arguments.callee === fn);
    /**
     * 如何将类数组对象转为数组对象
     * 1.Array.from() 将类数组转为数组
     * 2.使用拓展运算符
     */
    // console.log(Array.from(arguments));
    // console.log([...arguments]);
}
fn(1, 2, 3, 4, 5);
// 形参个数就是函数的长度
console.log(fn.length); // a,b ---> 2


/**
 * 递归 使用arguments.callee 实现递归
 */
// function fc (n) {
//     if (n == 1) {
//         return n = 1;
//     }
//     return arguments.callee(n - 1) * n;
// }
// console.log(fc(10));

/**
 * 斐波那契数列 0 1 1 2 3 5 8 13 21 34 55
 * 1 0 + 1  
 * 2 1 + 1  f(1) 1  f(0) 前两项相加之和等于第三项
 * 3 1 + 2  
 * 使用递归实现
 */
function fb (n) {
    if (n <= 1) {
        return n;
    }
    return fb(n - 1) + fb(n - 2);
}
console.log(fb(10));