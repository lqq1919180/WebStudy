let arr = [1, 2, 3, 4, 5];
let [...a] = arr;
console.log(a);
// 用到左侧是聚合 用到右侧是展开 
let obj = {
    name: 'zhangsan',
    age: 12,
    gender: 'male'
};
let temp = { ...obj };
delete temp.name;
console.log(temp, obj);