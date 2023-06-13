// 1.声明变量
// var a;
// 2.初始化变量
// a = 10;
// 3.声明变量的时候就可以初始化变量
// var a = 'hello js';
// 4.声明多个变量并进行初始化
// var b = 'hello', c = true, d = 20;
// console.log(a, b, c, d, '打印变量');
/**变量名或者标识符命名规则
 * 1.由字母数字下划线组成
 * 2.不能以数字开头
 * 3.不能使用关键字和保留字
 * 4.建议使用驼峰式命名 firstName
 * 3a _ $ break class a3  _ $ a3 合法    3a break class 不合法
 */
// var _ = 10, $ = 'hello';
// console.log(_, $);

/**
 * 使用var声明变量特点
 * 1.会进行变量提升 使用var声明的变量会提升到当前作用域的最前面
 * 2.可以重复声明
 * 3.不存在暂时性死区(未声明该变量就去访问该变量，就叫暂时性死区)
 * 4.不存在块级作用域 if for{}
 */
// console.log(a); //undefiend 解析顺序 var a; console.log(a);a=10;
// var a = 10;
// var a = 'hello';
// console.log(a);

// console.log(b);
// let b = 20;