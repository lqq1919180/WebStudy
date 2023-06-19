var obj = {
    name: 'zhangsan',
    age: 12
};
/**
 * 读取属性的特性 getOwnPropertyDescriptor(obj,属性));
 * 一次读取一个属性
 */
Object.defineProperty(obj, 'name', {
    configurable: false,
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
console.log(Object.getOwnPropertyDescriptor(obj,'age'));
console.log(Object.getOwnPropertyDescriptor(obj,'gender')); //undefined
console.log(obj.gender); //undefined

/**
 * 一次读取多个属性的特性
 * Object.getOwnPropertyDescriptors(对象);
 */
console.log(Object.getOwnPropertyDescriptors(obj), '读取多个属性特性');
console.log(Object.getOwnPropertyDescriptors(obj), '读取多个属性特性');