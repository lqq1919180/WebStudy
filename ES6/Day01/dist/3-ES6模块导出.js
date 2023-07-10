'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
/**
 * 导出变量
 */
var firstName = 'zhao';
var lastName = 'terry';
// 1.列表导出
exports.firstName = firstName;
exports.lastName = lastName;
// 2.重命名导出  使用as关键字进行重命名

exports.first = firstName;
exports.last = lastName;
// 3.单个属性的引入

var a = exports.a = 1;
function test() {
    console.log('我是一个函数');
};
// 默认导出  注意:一个模块只能有一个默认导出
exports.default = {
    firstName: firstName,
    lastName: lastName,
    a: a,
    test: test
};