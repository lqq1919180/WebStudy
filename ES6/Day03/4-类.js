class Person {
    // constructor(name){
    // 	this.name = name;
    // }
    // 静态属性和静态方法 只能由类本身去调用得方法和属性 使用static关键字声明
    static personAttr = '静态属性';
    static personMethod = function (p) {
        return p instanceof Person;
    };
}
let p1 = new Person();
console.log(p1);
// console.log(p1.personAttr); //undefined
// p1.personMethod(p1); // 报错，无法调用person的静态方法
console.log(Person.personAttr);
console.log(Person.personMethod(p1));;