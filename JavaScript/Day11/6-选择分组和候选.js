/**
 * 选择 |  html|css|js 从左到右依次匹配字符串  匹配到左侧就直接返回左侧 
 * 开启全局匹配 继续校验就会继续向右匹配 否则只返回第一个符合的结果
 */
// var reg = /html|css|js/; //css css
// var reg = /html|css|js/g; //css html
// var str = 'hellowroldcsshtml';
// console.log(reg.exec(str));
// console.log(reg.exec(str));

/**
 * 分组 () briupbriupbriup 
 */
// var reg = /^briupbriupbriup$/;
// console.log(reg.test('briup')); //false
// console.log(reg.test('briupbriup')); //false
// console.log(reg.test('briupbriupbriup')); //true
// console.log(reg.test('briupbriupbriupbriup'));//false

//更简洁的写法
// var reg = /^(briup){3}$/;
// console.log(reg.test('briup'));//false
// console.log(reg.test('briupbriup'));//false
// console.log(reg.test('briupbriupbriup'));//true
// console.log(reg.test('briupbriupbriupbriup'));//false


/**
 * 候选 选择分组综合
 */
var reg = /I Like (html|css|js)/;
console.log(reg.test('I Like html')); //true
console.log(reg.test('I Like css')); //true
console.log(reg.test('I Like js')); //true
console.log(reg.test('I Like css html js')); //true
console.log(reg.test('I Like table')); //false