/**
 * 数组 keys values entries
 * 方法全部返回迭代器对象 实现了迭代器接口 就可以使用for of遍历
 * 迭代器接口本质就是调用迭代器对象的next方法 指针 调用next方法会依次指向内部成员 
 */
// let arr = [1, 2, 3, 4, 5];
// let keys = arr.keys();//[0,1,2,3,4]
// let values = arr.values();//[1,2,3,4,5]
// let entries = arr.entries();//[[0,1],[1,2],[2,3],[3,4],[4,5]]
// console.log(keys.next());//{value:0,done:false}
// console.log(keys.next());//{value:1,done:false}
// console.log(keys.next());//{value:2,done:false}
// console.log(keys.next());//{value:3,done:false}
// console.log(keys.next());//{value:4,done:false}
// console.log(keys.next());//{value:undefined,done:true}
// console.log(values.next());//{value:0,done:false}
// console.log(entries.next());

// let result;
// while (!(result = keys.next()).done) {
//     console.log(result);
// }


// console.log(keys, values, entries);
// for (let key of keys) {
//     console.log(key, 'key');
// }
// for (let value of values) {
//     console.log(value, 'value');
// }
// for (let entry of entries) {
//     console.log(entry, 'entry');
// }

function test () {
    //   arguments 是迭代器对象 
    for (let key of arguments) {
        console.log(key);
    }
}
test('1', '2', '3', 4, 5);
let obj = {
    name: 'zhangsan',
    age: 12
};

// for(let key of obj){
//     console.log(key);
// }
let keys = Object.keys(obj);
for (let key of keys) {
    console.log(key);
}