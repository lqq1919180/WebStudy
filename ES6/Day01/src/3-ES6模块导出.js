/**
 * 导出变量
 */
let firstName = 'zhao';
let lastName = 'terry';
// 1.列表导出
export { firstName, lastName };
// 2.重命名导出  使用as关键字进行重命名
export { firstName as first, lastName as last };
// 3.单个属性的引入
export var a = 1;
export function test () {
    console.log('我是一个函数');
};
// 默认导出  注意:一个模块只能有一个默认导出
export default {
    firstName,
    lastName,
    a,
    test
};