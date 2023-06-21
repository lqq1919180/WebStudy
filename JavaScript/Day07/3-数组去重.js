// 使用所学的api或方法对数组进行去重 核心思路
// var arr = [11, 22, 32, 21, 11, 22, 56]; //对数组进行去重复
/**
 * 1.使用双层for循环
 * 核心思路:对比前一项和后一项 如果相等删除后一项 把后边的元素往前移(修正下标)
 */
// function unique () {
//     //数组的第一项
//     for (var i = 0; i < arr.length; i++) {
//         //数组的后一项
//         for (var j = i + 1; j < arr.length; j++) {
//             //判断前一项和后一项是否相等 相等则删除后一项(修正下标)
//             if (arr[i] === arr[j]) {
//                 //删除后一项
//                 arr.splice(j, 1);
//                 //修正下标
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// unique(arr);
// console.log(arr);


/**
 * 2.利用indexOf和lastIndexOf对数组进行去重
 * 核心思路:创建一个新空数组 遍历数组 判断数组元素是否存在于新数组中 不存在则进行添加
 */
// var arr = [11, 22, 32, 21, 11, 22, 56];// 对数组进行去重复
// function unique (arr) {
//     //创建一个新的空数组
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         //检测数组元素是否存在于新数组中 不存在添加
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     //返回去重后的新数组
//     return newArr;
// }
// console.log(unique(arr));


/**
 * 3.includes 数组方法 检测数组元素是否包含在数组中 包含返回true 不包含返回false
 * 参数:检测的数组元素  返回值:返回true/false    不修改数组
 */
// var arr = [11, 22, 32, 21, 11, 22, 56];//对数组进行去重复
// // var res = arr.includes(88);
// // console.log(res, arr); //false 各数组元素
// function unique (arr) {
//     //声明一个新空数组
//     let newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             //将符合条件的数组元素添加到新空数组中
//             newArr.push(arr[i]);
//         }
//     }
//     //将符合条件的新的数组返回
//     return newArr;
// }
// console.log(unique(arr));

/**
 * 4.forEach + indexOf/lastIndexOf/includes 对数组进行去重
 */
// var arr = [11, 22, 32, 21, 11, 22, 56];
// function unique (arr) {
//     //创建新的空数组
//     let newArr = [];
//     // 循环数组元素
//     arr.forEach(function (item) {
//         if (newArr.indexOf(item) === -1) {
//             newArr.push(item);
//         }
//     });
//     // 返回不重复数组
//     return newArr;
// }
// console.log(unique(arr));

/**
 * 5.使用filter和includes/indexOf/lastIndexOf 实现数组去重
 */
// var arr = [11, 22, 32, 21, 11, 22, 56];
// function unique (arr) {
//     let newArr = [];
//     return arr.filter(function (item) {
//         //三目运算符
//         // return newArr.includes(item) ? "" : newArr.push(item);
//         // return newArr.indexOf(item) !== -1 ? "" : newArr.push(item);
//         return newArr.lastIndexOf(item) !== -1 ? "" : newArr.push(item);
//     });

// }
// console.log(unique(arr));


/**
 * 6.利用set集合进行去重复 内部成员是不会重复的
 */
var arr = [11, 22, 32, 21, 11, 22, 56];
// 将数组转为set集合 去除重复成员
var res = new Set(arr);
console.log(res);
// 1.将set集合转为数组
// console.log(Array.from(res));
// 2.利用拓展运算符 ... 将所有set进行展开
console.log([...res]);

//创建一个set集合 数据结构 集合
// var set = new Set();
// set.add(10);
// set.add(20);
// set.add(10);
// console.log(set); //10 ,20