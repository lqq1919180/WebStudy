// commonjs 模块化导入
let _ = require('./5-Commonjs模块导出');
console.log(_.firstName, _.lastName); //{firstName,lastName}

let { firstName, lastName } = require('./5-Commonjs模块导出');
console.log(lastName, firstName);

// lodash npm install lodash
// var _ = require('lodash')
// console.log(module,'模块');