// 检测对象的属性是否是自有或者继承属性 in '属性' in obj
var obj = {
    name: 'zhangsan',
    age: 12
};
// console.log('name' in obj);
// console.log('age' in obj);
// // 继承来的
// console.log('toString' in obj); //true
// console.log('gender' in obj); //false 既不是自有属性也不是继承属性

/**
 * 2.检测属性是否是自有属性 对于继承属性返回false
 * hasOwnProperty
 */
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('age'));
// console.log(obj.hasOwnProperty('toString'));
// console.log(obj.hasOwnProperty('gender'));

/**
 * 3.检测属性是否是可枚举属性(创建的属性) propertyIsEnumerable
 */
console.log(obj.propertyIsEnumerable('name'));
console.log(obj.propertyIsEnumerable('age'));
console.log(obj.propertyIsEnumerable('gender'));
console.log(obj.propertyIsEnumerable('toString'));