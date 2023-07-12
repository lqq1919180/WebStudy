console.log(this === module.exports);
console.log(arguments, '模块信息');
this.name = 'lisi';
// module.exports = 'lisi';
let sayName = () => {
    console.log(this.name);
};
let obj = {
    name: 'zhangsan',
    age: 12,
    sayName () {
        return sayName;
    }
};
obj.sayName()();