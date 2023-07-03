/**
 * 创建构造函数  声明父构造函数
 */
function Animal (type, age, weight, length) {
    this.type = type;
    this.age = age;
    this.weight = weight;
    this.length = length;
}
/**
 * 将公共方法写在原型对象
 */
Animal.prototype = {
    constructor: Animal,
    sayType: function () {
        console.log(this.type);
    }
};
/**
 * 声明子构造函数
 */
function Dog (type, age, weight, length, name, color) {
    /**
     * new Dog() 
     * this --->dog实例 
     */
    // 1.借用构造函数继承  经典继承 
    /**
     * 调用父构造函数并且将this指向修改为子构造函数实例 
     */
    Animal.call(this, type, age, weight, length);
    // Animal.apply(this,[type,age,weight,length]);
    // Animal.bind(this,type,age,weight,length)();
    this.name = name;
    this.color = color;
}
//原型链继承 子构造函数的原型对象指向父构造函数的实例
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.sayColor = function () {
    console.log(this.color);
};
Dog.prototype.sayType = function () {
    console.log('我是子构造函数原型对象');
};
var d1 = new Dog('狗', 1, '10kg', '50cm', '可乐', '白色');
console.log(d1);
d1.sayType();
d1.sayColor();
/**
 * 创建对象方式?
 * 1.单个对象
 * 2.多个对象
 * 	设计模式 工厂模式 构造函数模式 原型模式 组合模式
 * 继承 1.借用构造函数继承 经典继承 
 * 2.原型链继承 
 * 3.组合继承
 */
