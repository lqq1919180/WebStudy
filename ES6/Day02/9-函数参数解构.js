// function test ({ name, age, ...gender }) {
//     console.log(name, age, gender);
// }
// test({ name: 'zhangsan', age: 12, gender: 'male' });

// function test ({ name, age = 1, gender }) {
//     console.log(name, age, gender);
// }
// test({ name: 'zhangsan', gender: 'male' });


/**
 * 函数尾参数:如果给形参赋一个默认值 自动作为函数尾参数 
 * 包括后面的形参和尾参数不计入函数长度得计算
 */
function log (a, e, f, b = 2, c) {

}
log(1, 2, 3);
console.log(log.length);