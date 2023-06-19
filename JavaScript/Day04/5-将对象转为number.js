var obj = {
    name:'zhangsan',
    age: 12,
    toString () { 
        return '10'
    },
    valueOf () { 
        return '20'
    }
};
console.log(Number(obj), typeof (Number(obj)));
console.log(+obj, typeof (+obj));
console.log(parseInt(obj), typeof (parseInt(obj)));
console.log(parseFloat(obj), typeof (parseFloat(obj)));
// 如果重写了toString和valueOf parseInt和parseFloat调用toString
/**
 * 1.如果重写了toString 所有转number方法都会调用toString
 * 2.如果重写了valueOf Number() + 会调用valueOf
 * 3.如果两个方法都重写 Number 和 +会调用valueOf方法
 * parseInt和parseFloat调用toString()方法
 */