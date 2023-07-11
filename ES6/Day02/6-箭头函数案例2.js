let name = 'terry';
let age = 12;
// 箭头函数本身没有this指向 this指向声明箭头函数外部作用域的this
let sayName = () => {
    console.log(this.name);
};
let obj = {
    name,
    age,
    sayName () {
        return sayName;
    }
};
obj.sayName()();