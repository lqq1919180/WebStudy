var obj = {
    gender: 'male',
    age: 18,
    no: 'web2301'
};
// 定义多个属性
Object.defineProperties(obj, {
    gender: {
        //数据属性 可读 可写 可删除 可遍历
        configurable: false
    },
    age: {
        writable: false
    },
    no: {
        enumerable: false
    }
});
delete obj.gender;
obj.age = 20;
console.log(obj.propertyIsEnumerable('no'));
console.log(obj);
/**
 * 定义一个属性
 * defineProperty(属性所在对象,'属性',{
 * 
 * })
 * 
 * 定义多个属性
 * defineProperties(属性所在对象,{
 *  name: {},
 *  age: {},
 *  gender: {},
 * })
 */