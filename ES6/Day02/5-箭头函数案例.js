let name = 'terry';
let age = '12';
let obj = {
    // es6  对象简写  如果变量名和属性名重名  可以简写属性名
    name,
    age,
    // es5声明方法
    // sayName: function () {
    //     console.log(this.name);
    // }
    // es6简写方法
    // sayName () { 
    //     console.log(this.name); // terry
    // } 
    // sayName: () => {
    //     console.log(this.name); // undefined
    //  } 
    sayName () {
        // 箭头函数本身没有this指向  它的this指向声明箭头函数外部作用域中
        return () => {
            console.log(this.name);
        };
    }
};
console.log(obj.sayName()());
// obj.sayName()(); //terry
// console.log(obj.name, obj.age);
var res = obj.sayName();
res(); //terry