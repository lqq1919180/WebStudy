class Person {
    constructor(name, age, gender) {
        // 类构造器中属性和方法是实例私有属性和私有方法
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // 实例公共方法 类似于存放在Person类原型对象中
    sayName () {
        console.log(this.name);
    }
    test = 'hello';//实例公共属性
    friends = [];//实例私有属性 
    // 类静态属性和静态方法
    static personAttr = '类静态属性';
    static personMethod = function () {
        console.log('类静态方法this指向类本身');
        console.log(this, this.personAttr);
    };
}
let p1 = new Person('可乐', 12, 'male');
let p2 = new Person();
console.log(p1.test, p2.test);
console.log(p1.test === p2.test);
p1.friends.push('tom');
console.log(p1.friends, p2.friends);
console.log(p1.friends === p2.friends);
Person.personMethod();