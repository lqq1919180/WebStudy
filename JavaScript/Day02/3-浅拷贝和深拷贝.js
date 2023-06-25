// 深拷贝 拷贝的是值
var a = 10;
var b = a;
console.log(a, b); // 10 10 
b = 20;
console.log(a, b); // 20 10
// 浅拷贝 拷贝的是引用地址
var obj = {
    name: 'zhangsan',
    age: 12
}
var obj1 = obj;
console.log(obj, obj1);
obj1.name = 'lisi';
console.log(obj, obj1);