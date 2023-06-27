var reg = /hello/g;
var str = 'hello hello hello';
//没开启全局匹配的结果
// console.log(reg.lastIndex);//0
// console.log(reg.exec(str));//[]
// console.log(reg.lastIndex);//0

/**
 * 当设置了全局匹配时，每执行一次exec/test来匹配，
 * lastIndex就会移向匹配到的字符串的下一个位置
 */
console.log(reg.lastIndex); //0
console.log(reg.exec(str)); //返回第一个hello
console.log(reg.lastIndex); //5

// 每次正则查找的起点就是lastIndex

console.log(reg.lastIndex); //5
console.log(reg.exec(str)); //返回第二个hello
console.log(reg.lastIndex); //11

console.log(reg.lastIndex); //11
console.log(reg.exec(str)); //返回第三个hello
console.log(reg.lastIndex); //17

/**
 * 当指向的位置后没有可以再次匹配的字符串时，下一次执行exec返回**null*
 */
console.log(reg.lastIndex); //17
console.log(reg.exec(str)); //返回null
console.log(reg.lastIndex); //0

/**
 * lastIndex 归零，从字符串的开头重新匹配新的一轮
 */
// console.log(reg.lastIndex); //0
// console.log(reg.exec(str)); //返回第一个hello
// console.log(reg.lastIndex); //5

/**
 * 正则表达式实例属性
 * ignoreCase(匹配时忽略大小写) global(全局匹配) multiline(多行匹配) 返回值   就是true false
 * source
 */
var pattern = /hello/igm;
console.log(pattern.ignoreCase); //是否忽略大小写 true
console.log(pattern.global); //是否全局匹配  true
console.log(pattern.multiline); //是否多行匹配  true
console.log(pattern.source, typeof (pattern.source)); //返回正则表达式的模式字符串 string 类型
