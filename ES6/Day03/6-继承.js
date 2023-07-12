/**
 * es5 继承 
 * 经典继承 原型链继承
 */
// function Animal (name, age, length, weight) {
//     this.name = name;
//     this.age = age;
//     this.length = length;
//     this.weight = weight;
// }
// Animal.prototype = {
//     constructor: Animal,
//     sayType () {
//         console.log(this.type);
//     }
// };
// function Dog (name, age, length, weight, type) {
//     // 继承父构造函数属性  借用构造函数继承 经典继承
//     Animal.call(this, name, age, length, weight);
//     this.type = type;
// }
// // 原型链继承 子类得原型对象指向父类得实例 
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;
// let d1 = new Dog('可乐', 12, '40cm', '10kg', '狗');
// d1.sayType();
// console.log(d1);


/**
 * ES6 继承 使用extends关键字实现继承
 */
class Animal {
    // 构造器属性 实例私有属性
    constructor(name, age, length) {
        this.name = name;
        this.age = age;
        this.length = length;
    }
    // 类体方法 实例公共方法 存放在Person.prototype
    sayName () {
        console.log(this.name);
    }
    test = 'hello';
    friends = [];
    // 静态属性和静态方法 
    static ParentAttr = '父类属性';
    static ParentMethod = function (a) {
        console.log('父类的方法');
        return a instanceof Animal;
    };
}
// 子类继承父类 不提供constructor 还会继承父类得原型对象 
// class Dog extends Animal{

// }
// let d1 = new Dog('可乐',12,'40cm');
// console.log(d1);
// d1.sayName();
// d1.friends.push('tom');
// console.log(d1.test,d1.friends,d1);
// console.log(Dog.ParentAttr);
// console.log(Dog.ParentMethod(d1));

// // 子类继承自父类
// console.log(Dog.__proto__ === Animal);
// // 子类原型对象继承自父类得原型对象
// console.log(Dog.prototype.__proto__ === Animal.prototype);


// 子类如果提供了构造器 必须显示调用super
class Dog extends Animal {
    constructor(name, age, weight, type, color) {
        super(name, age, weight);//相当于调用父类构造器 Animal.call()
        this.type = type;
        this.color = color;
    }
    sayName () {
        console.log(this.name, '子类实例公共方法');
    }
}
let d1 = new Dog('可乐', 12, '40cm', '狗', '白色');
console.log(d1);
d1.sayName();