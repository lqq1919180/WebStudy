/**
 * 组合模式 原型模式 + 构造函数模式
 * 将实例私有属性和方法全部放在构造函数中
 * 将实例公共属性和方法全部放在原型对象中
 * 批量创建对象 区分种类 解决方法冗余
 */
function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.friends = [];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
};
var p1 = new Person('terry', 12, 'male');
var p2 = new Person('larry', 15, 'female');
console.log(p1, p2);
p1.friends.push('tom');
console.log(p1, p2);
console.log(p1.sayName === p2.sayName);

//所有构造函数都是Object子类型 都在Object这条原型链
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);
console.log(Person instanceof Object);
var arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(arr instanceof Person);

