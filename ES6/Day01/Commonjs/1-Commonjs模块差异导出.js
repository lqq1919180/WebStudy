/**
 * commonjs导出
 */
let firstValue = 'ren';
let lastValue = 'terry';

module.exports = {
    // 如果变量名和属性名重名  可以简写为属性名
    // firstValue: firstValue,
    // lastValue: lastValue,
    firstValue,
    lastValue,
};
setTimeout(() => {
    firstValue = 'zhao';
}, 2000);