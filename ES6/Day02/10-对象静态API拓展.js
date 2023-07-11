/**
 * 比较两个值是否相等或者全等
 */
// console.log(Object.is(1, 1));
// console.log(Object.is(1, 2));
// console.log(+1 == -1);
// console.log(+1 === -1);
// console.log(Object.is(+1, -1));
// console.log(Object.is(NaN, NaN));//true
// console.log(NaN === NaN);//false
// console.log(+0 === -0);//true
// console.log(Object.is(+0, -0));//false


/**
 * assign方法 
 * 参数：两个参数  复制对象  目标对象 要复制的对象
 * 返回值：返回得是目标对象
 *  三个参数   合并对象 	目标对象 要合并的对象 要合并的对象
 */
// let o = {};
// let obj = {
//     name: 'zhangsan',
//     age: 12,

// };
/**
 * 实现深拷贝 assign 要复制的对象中只有基本数据类型深拷贝
 */
// var res = Object.assign(o, obj);
// console.log(res);
// console.log(res === o, res === obj);
// res.name = 'lisi';
// console.log(res, obj,o);




// let o = {};
// let obj = {
//     name: 'zhangsan',
//     age: 12,
//     clazz: {
//         no: "web2301"
//     }
// };
/** 半深拷贝  assign
 * 如果现在对象中有基本数据类型实现深拷贝
 *  引用数据类型实现浅拷贝
 */
// let res = Object.assign(o, obj);
// res.name = 'lisi';
// console.log(res, obj);
// res.clazz.no = 'web2302';
// console.log(res, obj);



/**
 * assign 参数:目标对象 合并对象1 合并对象2
 * 返回值：就是目标对象
 */
// let o = {
//     no: 'web2301'
// };
// let obj = {
//     name: 'zhangsan',
//     age: 12
// };
// let obj1 = {
//     gender: 'male'
// };
// let res = Object.assign(o, obj, obj1);
// console.log(res, res === o);


/**
 * 访问原型对象 getPropertypeof
 */
// let obj = {
//     name: 'zhangsan',
//     age: 12
// };
// console.log(obj.__proto__);
// console.log(obj.constructor.prototype);
// console.log(Object.getPrototypeOf(obj));

/**
 * 设置原型对象setPrototypeOf
 * 参数：目标对象 新原型：obj1
 */
// let obj = { name: 'zhangsan' };
// let obj1 = { name: 'lisi', age: 12 };
// Object.setPrototypeOf(obj, obj1);
// console.log(obj.__proto__);//Object prototype
// console.log(obj.constructor.prototype);
// console.log(Object.getPrototypeOf(obj));

/**
 * keys values entries
 */
let obj = {
    gender: 'male',
    no: '1001',
    sayName: function () { }
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
var res = Object.entries(obj);//[['gender','male'],[],[]]
/**
 * fromEntries 将属性名和属性值组成二维数组转为对象
 */
console.log(Object.fromEntries(res));