'use strict';

var _ES = require('./7-ES6\u6A21\u5757\u5DEE\u5F02');

console.log(_ES.first, _ES.last); /**
                                   * 在编译时进行加载
                                   */

setTimeout(function () {
  console.log(_ES.first, _ES.last);
}, 4000);