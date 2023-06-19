var obj = {
    name: 'zhangsan',
    age: 12,
    sayName () {
        console.log('访问成功');
    }
};
// 访问属性 点访问法
console.log(obj.name);
// 中括号访问法 可以解析变量
console.log(obj['age']);
console.log(obj['sayName']());

for (let key in obj) { 
    console.log(key,obj[key]);
}