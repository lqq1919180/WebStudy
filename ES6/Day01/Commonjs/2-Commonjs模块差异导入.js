/**
 * commonjs模块化导入
 */
let { firstValue, lastValue } = require('./1-Commonjs模块差异导出');
console.log(firstValue, lastValue);

setTimeout(() => {
    console.log(firstValue, lastValue);
}, 4000);