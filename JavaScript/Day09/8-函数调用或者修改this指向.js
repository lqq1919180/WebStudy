/**
 * 1.如何修改函数this指向？
    *1.call(执行环境对象,实参列表)
    *2.apply(执行环境对象,[实参列表])
    *3.bind(执行环境对象,实际参数)(实际参数)
*  2.函数调用的方式
    *1.函数名
    *2.call()
    *3.apply()
    *4.bind()()
 */

var obj = {
    name: 'terry',
    sayName: function () {
        console.log(this, this.name);
    }
};
var obj1 = {
    name: 'larry',
    sayName: function (a, b) {
        console.log(this,this.name, a, b);
    }
};
// obj.sayName();
// obj1.sayName(1,2);
// 1.修改this指向 call()
// obj1.sayName.call(obj, 1, 2);
// 2.修改this指向 apply()
// obj1.sayName.apply(obj, [1, 2]);
// 3.修改this指向 bind()()  bind()返回当前函数本身 bind()()调用函数
// console.log(obj.sayName.bind(obj, 1, 2));
// obj1.sayName.bind(obj, 1)(2); //结果同下一致
obj1.sayName.bind(obj)(1, 2);