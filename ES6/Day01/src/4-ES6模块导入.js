/**
 * 模块导入
 */

let first = 'hello';
let last = 'world';

// 1.列表导入
import { firstName, lastName } from "./3-ES6模块导出.js";
console.log(firstName, lastName);

// 2.重命名导入
import { first as f, last as l } from "./3-ES6模块导出.js";
console.log(first, last, f, l);

// 3.单个属性的引入
// import a from './3-ES6模块导出.js'
// import test from './3-ES6模块导出.js'
import { a, test } from './3-ES6模块导出.js';
console.log(a, test);
test();

// 4.默认导入
import person from './3-ES6模块导出.js';
console.log(person);

// 5.导入所有使用export导出的内容
import * as obj from './3-ES6模块导出.js'
console.log(obj,'所有使用export导出的内容')