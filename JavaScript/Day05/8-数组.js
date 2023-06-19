/**
 * 数组:是一个可以存放任意数据类型的有序集合
 * 1.数组元素可以是任意数据类型
 * 2.数组大小可以动态变换
 */
// [1,2,[3,4,5,[6,7,8,[10]]]]   [1,2,3,4,5,6,7,8,9]
var arr = [10, 'hello', null, undefined, function () { }, { name: "zhangsan" }, [3, 4, 5]];
// console.log(arr, arr.length);
arr.length = 8;
console.log(arr);