/**
 * 1.number
 * 十六进制 十进制 科学技术法 小数 分数
 */
// var a = 10;
// var b = 0x11;//0x开头表示十六进制 0-9 a-f 1*16^0 + 1*16^1=17
// var c = 0o11; //0 开头表示八进制 
// var d = 3e10; //科学计数法
// var e = 18 / 5; //分数
// console.log(a, b, c, d, e, typeof a, typeof b, typeof c, typeof d, typeof e);

/**
 * 2.string 类型 字符串类型 "" ''
 */
// var a = '10';
// var b = "hello js";
// console.log(a, b, typeof a, typeof b);

/**
 * 3.boolean 布尔类型 true false
 */
// var a = true, b = false;
// console.log(a, b, typeof a, typeof b);

/**
 * 4.undefined 未定义 声明变量不初始化 声明变量将其值初始化为undefined
 */
// var a; //等同于 var a = undefined;
// var b = undefined;
// console.log(a, b, typeof a, typeof b);

/**
 * 5.null 空引用数据类型 检测数据类型的结果 object
 */
// var a = null;
// console.log(a, typeof a);

/**
 * 6.symbol 表示一个独一无二的值
 */
// var a = Symbol('name');
// console.log(a, typeof a);
// ===全等 比较数据类型 比较值
// console.log(9007255619989992===9007255619989993);  //true

/**
 * 7.BigInt 类型 超出js计算范围以外的数可以使用BigInt处理
 */
// var a = BigInt(9007255619989992n);
// console.log(a, typeof a);

//typeof 检测结果 number string boolean undefiend object symbol bigint