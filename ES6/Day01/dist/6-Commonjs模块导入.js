'use strict';

// commonjs 模块化导入
var _ = require('./5-Commonjs模块导出');
console.log(_.firstName, _.lastName);

var _require = require('./5-Commonjs模块导出'),
    firstName = _require.firstName,
    lastName = _require.lastName;

console.log(lastName, firstName);

// lodash npm install lodash
// var _ = require('lodash')
// console.log(module,'模块');