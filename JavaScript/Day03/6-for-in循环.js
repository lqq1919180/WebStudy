var obj = {
    name: 'zhangsan',
    age: 12,
    gender: 'male'
};
console.log(obj.name, obj['name']);

for (let key in obj) {
    console.log(key, obj[key]);
}

var arr = [1, 2, 3, 4, 5];
for (let key in arr) {
    console.log(key, arr[key]);
}