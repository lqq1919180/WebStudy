/**
 * ES6 提供了类这个概念 看成构造函数的另一种写法 创建对象模板 使用class关键字声明类
 */
class Person {
    // 必须显示提供构造器 如果不提供 系统会默认提供一个空的构造器 
    constructor(name, age, gender) {
        // 实例私有属性私有方法
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.say = function () {
            console.log('我是实例私有方法');
        };
    }
    // 实例公共方法 写在类体中得方法就是公共方法 类似于写在原型对象中
    sayName () {
        console.log(this.name);
    }
}
// console.log(Person.prototype, Person.prototype.constructor);//{} [class Person]
let p1 = new Person('张三', 12, 'male');
let p2 = new Person('李四', 15, 'female');
console.log(p1, p2);
console.log(p1.sayName === p2.sayName);
p1.sayName();
p1.say();
console.log(p1.say === p2.say);
