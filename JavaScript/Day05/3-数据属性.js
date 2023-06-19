/**
 * 数据属性可以定义属性可配置 可枚举 可删除 可写/修改 可遍历
 */
var obj = {
    name: 'zhangsan',
    age: 12,
};

/**
 * 定义属性 静态方法 Object.defineProperty
 * 1.目标对象obj 定义属性 属性描述符 {}
 */
Object.defineProperty(obj, 'name', {
    value: 'terry',
    // 是否可配置 是否可删除 默认是true 表示不可删除 false不可删除
    configurable: false,
    // 当前属性是否可写 默认是true
    writable:false,
    // 设置当前是否可枚举 默认是true 是否可以使用for in 循环遍历
    enumerable:false
});
delete obj.name;
obj.name = 'larry';
console.log(obj);
console.log(obj.name); //如果设置了不可枚举 只是隐藏起来 还可以访问到该属性
for (let key in obj) { 
    console.log(key);
}