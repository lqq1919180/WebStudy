// + 运算符 两个操作数有一个是字符串 就是字符串拼接
// console.log(1 + '2'); //12
// // - / * % 两个字符串有一个是其他数据类型 就是隐式转换number 进行运算
// console.log(1  - '2'); //1-2
// console.log(1 -true); //1-1
// console.log(1 -null); //1-0
// console.log(1 -undefined); //1-NaN
// console.log(1 -{}); //1-NaN
// console.log(1 -[]); //1-0
// console.log(1 -function(){}); //1-NaN

// // 将其他数据类型转为number类型
// console.log(+[],+null,+true,+false,+"",+'hello');

// 隐式转换 - * / % ==
/**
 * 如果两个操作数 一个是数字 一个是字符串 隐式将字符串转为数字进行比较
 * 如果两个操作数 一个是数字 一个是布尔值 隐式将布尔值转为数字进行比较
 * 如果两个操作数 一个是布尔 一个是字符串 隐式将它俩转成数字进行比较
 */
// console.log(1 == '1');
// console.log(1 == true);
// console.log('1' == true);
// console.log('1' == null);
// console.log(null == undefined);

//引用数据类型隐式转换
/**
 * 将引用数据类型转换为原始值 基本数据类型
 * 引用数据类型中的 toString() valueOf()
 */
// console.log([] + [], typeof ([] + []), '转换1');//"" toString()
// console.log([] + {}, '转换2');//[object Object]
// console.log({} + {}, '转换3'); //[object Object] [object Object]

// console.log([].toString(), [].valueOf(), '44444');
// console.log({}.toString(), {}.valueOf(), typeof ({}.toString()), typeof ({}.valueOf()));

/**
 * 重写toString 和 valueOf()
 * 如果重写了toString方法 调用toString
 * 如果重写了valueOf 调用valueOf
 * 如果重写了toString、valueOf方法,调用valueOf方法
 */
var obj = {
    name: "zhangsan",
    age: 12,
    toString () {
        return 10
    },
    valueOf () {
        return true
    }
}
var b = 10;
console.log(obj + 10); // [object,Object]10  调用toString 手动改成valueOf() 还会调用toString()
