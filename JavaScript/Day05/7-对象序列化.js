var obj = {
    name: 'zhangsan',
    age: 12
};
/**后端 需要json格式对象
 * JSON.stringify 将js对象转换成json字符串对象]
 * 将对象进行序列化
 */
var jsonStr = JSON.stringify(obj);
console.log(jsonStr, typeof jsonStr);

/**
 * 将json字符串进行反序列化 将json字符串转为js对象
 * JSON.parse()
 * 实现深拷贝方式 
 * 1.利用序列化和反序列化实现深拷贝
 * 2.使用...拓展运算符  {...obj}     
 */
var jsObj = JSON.parse(jsonStr);
console.log(jsObj, typeof jsObj);
console.log(obj == jsObj);//false