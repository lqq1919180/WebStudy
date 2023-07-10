'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 
 */
var first = 'zhao';
var last = 'larry';
// 1.列表导出
exports.first = first;
exports.last = last;

setTimeout(function () {
  exports.first = first = 'ren';
}, 2000);