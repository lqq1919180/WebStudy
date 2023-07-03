/*
*创建对象的方式有哪些？
*1.创建单个对象
*	 字面量 var obj = {}
*  构造函数 var obj = new Object()
*2.创建多个对象 
*	1.工厂函数模式
*	2.构造函数模式
* 3.原型模式(不单独使用)
*	4.组合模式 2+3结合体
*/

/**
 * 工厂函数模式 为了批量创建对象
 * 优点：可以批量创建对象 降低代码冗余量
 * 缺点：无法区分种类 全部是Object的实例 方法冗余
 */
var sayName = function () {
    console.log(this.name);
};//b1003
// sayName(); undefined

function person (name, age, gender) {
    // var obj = new Object();//{}
    // obj.name = name;
    // obj.age = age;
    // return obj;//{}
    return {
        name: name,
        age: age,
        gender: gender,
        sayName: sayName
    };
}
var p1 = person('zhangsan', 12, 'male');
var p2 = person('lisi', 15, 'female');
console.log(p1, p2);
p1.sayName();
p2.sayName();
console.log(p1.sayName === p2.sayName);



// function dog(name){
// 	return {
// 		name:name
// 	}
// }
// var d1 = dog('zhangsan');
// console.log(d1);


