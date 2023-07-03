/**
 * 2.构造函数模式
 * 优点：可以区分种类 可以批量创建对象
 * 缺点：方法冗余 
 */
var sayName = function () {
    console.log(this.name);
};
function Person (name, age, gender) {
    /**
     * 使用new关键字js做了些什么事情
     * 1.创建一个实例对象   										p1 Person {}
     * 2.将this 指向实例对象 this --->p1 p2	  this --->p1{}
     * 3.执行函数体													 p1.name = 'terry'
     * 4.返回实例对象 												return p1{}
     */
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = sayName;
}
var p1 = new Person('terry', 12, 'male');
var p2 = new Person('larry', 18, 'female');
console.log(p1, p2);
p1.sayName();
p2.sayName();
console.log(p1.sayName === p2.sayName);
/**
 * instanceof 判断当前实例对象是否处在原型链上 
 * 判断是否是某一个构造函数的实例对象
 */
console.log(p1 instanceof Person);
console.log(p2 instanceof Person);
console.log(p1 instanceof Object);
console.log(p2 instanceof Object);
console.log(Person instanceof Object);
