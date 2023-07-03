/**
 * 原型模式(不单独使用)
 * 将实例所有属性和方法全部放在原型对象中  构造函数内部不放任何属性和方法
 * 优点：解决了方法冗余  批量创建对象
 * 缺点：所有实例属性和方法全部是一样
 */
function Person () {
    /**
     * 1.创建实例对象
     * 2.this--->实例对象
     * 3.执行函数体
     * 4.返回实例对象
     */
};
// Person.prototype.name='lisi';
// Person.prototype.age=12;
// Person.prototype.gender='male';
// Person.prototype.sayName = function(){
// 	console.log(this.name)
// }
console.log(Person.prototype);
console.log(Person.prototype.constructor);
Person.prototype = {
    //手动将构造者改为Person
    constructor: Person,
    name: 'lisi',
    age: 12,
    gender: 'male',
    sayName: function () {
        console.log(this.name);
    }
};
console.log(Person.prototype);
console.log(Person.prototype.constructor);//constructor 指向Object

Person.prototype.friends = [];
var p1 = new Person();
var p2 = new Person();
console.log(p1.constructor, p2.constructor);
// console.log(p1,p2);
// console.log(p1.name,p2.name);
// console.log(p1.sayName === p2.sayName);
p1.friends.push('tom');
// console.log(p1.friends,p2.friends);

