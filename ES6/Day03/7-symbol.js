/**
 * 一种基本数据类型  唯一标识  每次symbol返回一个唯一值
 * 参数:字符串   表示对这个symbol值的描述
 * 1.可以产生唯一的值  独一无二的值
 * 2.解决变量冲突
 * 如果symbol值作为属性名 使用 for in 遍历对象的时候获取不到
 * 3.作为全局注册表 缓存 Symbol.for()
 * 4.消除魔术字符串
 */
// let sy1 = Symbol();
// let sy2 = Symbol();
// console.log(sy1, sy2, sy1 === sy2, sy1.toString());

// let sy1 = Symbol('name'); // 接受的字符串对symbol值的描述
// let sy2 = Symbol('age'); // 接受的字符串对symbol值的描述
// let obj = {
//     name: 'zhangsan',
//     age: 12,
//     [sy1]: 'terry',
//     [sy2]: 18,
//     [Symbol('email')]: '123@123.com'
// };
// console.log(obj);
// for (let key in obj) {
//     console.log(key);
// }
/**
 * 获取所有symbol值对应属性  组成一个数组
 * getOwnPropertySymbols
 */
// console.log(Object.getOwnPropertySymbols(obj));
// let s = Object.getOwnPropertySymbols(obj); //[ Symbol(name), Symbol(age), Symbol(email) ]
// console.log(obj[s[2]]);

/**
 * 3.作为全局注册表
 */
// let sy1 = Symbol.for('hello');
// let sy2 = Symbol.for('hello');
// console.log(sy1 === sy2); //true

// let sy3 = Symbol('hello');
// let sy4 = Symbol('hello');
// console.log(sy3 === sy4); //false
/** 
 * keyFor 方法返回Symbol值的描述  如果在全局注册表中注册过 返回这个symbol值的描述或者undefined
*/
// console.log(Symbol.keyFor(sy1)); //hello
// console.log(Symbol.keyFor(sy2)); //hello(sy1的缓存)
// console.log(Symbol.keyFor(sy3)); //undefined

/**
 * 4.消除魔术字符串
 */
function getArea (shape, options) {
    let area = 0;
    switch (shape) {
        case Shape.SJX:
            area = .5 * options.height * options.width;
            break;
        case Shape.ZFX:
            area = options.width * options.height;
            break;
        case Shape.CIRCLE:
            area = Math.PI * options.r * options.r;
            break;
        default:
            area = -1;
    }
    return area;
}
const Shape = {
    SJX: Symbol('三角形'),
    ZFX: Symbol('正方形'),
    CIRCLE: Symbol('圆')
};
let res = getArea(Shape.SJX, { height: 100, width: 100, r: 50 });
console.log(res);

// const  无法修改基本数据类型值  但可以修改引用数据类型值