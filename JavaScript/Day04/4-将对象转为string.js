var obj = {
    name: 'zhangsan',
    age: 12,
    toString () {
        return this.name + '--' + this.age;
    }
};
console.log(obj.toString(), typeof (obj.toString()));
console.log(String(obj), typeof (String(obj)));
console.log(obj + "", typeof(obj + ""));
console.log(obj.valueOf(), typeof (obj.valueOf()));
