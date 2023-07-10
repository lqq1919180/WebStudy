'use strict';

var _ES = require('./3-ES6\u6A21\u5757\u5BFC\u51FA.js');

var obj = _interopRequireWildcard(_ES);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 模块导入
 */

var first = 'hello';
var last = 'world';

// 1.列表导入

console.log(_ES.firstName, _ES.lastName);

// 2.重命名导入

console.log(first, last, _ES.first, _ES.last);

// 3.单个属性的引入
// import a from './3-ES6模块导出.js'
// import test from './3-ES6模块导出.js'

console.log(_ES.a, _ES.test);
(0, _ES.test)();

// 4.默认导入

console.log(obj.default);

// 5.导入所有使用export导出的内容

console.log(obj, '所有使用export导出的内容');