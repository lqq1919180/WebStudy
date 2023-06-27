/**
 * 正则表达式创建
 * 1.构造函数创建   new RegExp('正则表达式', '修饰符')
 * 2.直接字面量     /正则表达式/igm
 */
var str = 'Hello world javascript hello';
var reg = new RegExp('hello', 'igm');
var reg1 = /hello/igm;

/**
 * 正则表达式实例方法 RegExProtoType.exec
 * 参数:要匹配字符串 返回值:数组或者null 匹配到返回一个数组
 *[
  'Hello',
  index: 0,
  input: 'hello world javascript hello',
  groups: undefined]
 */
// console.log(reg.exec(str));
// console.log(reg.exec(str));

// var res = reg.exec(str);
// console.log(res[0], res['index'], res.input);

// 想要全局匹配字符
while (true) {
    var res = reg.exec(str);
    if (!res) {
        break;
    }
    console.log(res[0], res['index']); // Hello 0  hello 23
}