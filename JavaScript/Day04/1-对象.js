/**
 * 对象的创建
 * 1.对象字面量
 * 2.使用构造函数 new
 */
var obj = {
    name: 'terry',
    age: 18,
    sayName: function () {
        console.log(this.name);
    }
};
console.log(obj.sayName);
obj.sayName();

var obj1 = new Object(); //构造函数创建对象 
obj1.name = 'larry';
obj1.age = 18;
obj1.sayName = function () {
    console.log(this.name);
};
obj1.sayName();
console.log(obj, obj1);
