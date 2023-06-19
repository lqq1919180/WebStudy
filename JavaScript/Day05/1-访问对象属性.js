var obj = {
    name: 'terry',
    'age-1': 22
};
console.log(obj.age - 1); //NaN
console.log(obj['age-1']); //22

// 中括号解析变量
var a = 'gender';
obj[a] = 'female';
console.log(obj);
