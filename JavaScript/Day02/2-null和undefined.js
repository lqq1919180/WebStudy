// null 和 undefined 关系 undefined派生自null
// 相等 会将数据类型转换为同一类型再去比较
console.log(null == undefined); //true
// 全等 先比较数据类型 数据类型 不一致直接返回false
console.log(10 === '10');