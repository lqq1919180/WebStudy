/**
 * 排序方法 数组进行反转 reverse
 * 参数:无       返回值:返回反转后的新数组        修不修改原数组:修改原数组
 * 
 */

// var newArr;
// Array.prototype.myReverse = function () {
//     newArr = [];
//     for (var i = this.length - 1; i >= 0; i--) {
//         // 在新数组中从头到尾添加反转后的数组元素 5 4 3 2 1
//         newArr[newArr.length] = this[i];
//     }
//     arr = newArr;
//     return arr;
// };
// var arr = [1, 2, 3, 4, 5];
// var res = arr.myReverse();
// console.log(arr, res);

/**
 * sort方法 对数组进行排序 
 * 1.参数:无      返回值:会根据ascll码进行排序 返回排序后的新数组       修不修改原数组:修改原数组
 * 
 */
// var arr = [1, 11, 22, 23, 202, 58, 69];
// var res = arr.sort();
// console.log(res, arr);

/**
 * sort排序 升序 降序
 * 2.参数:function(){}函数       返回值:根据大小排序 返回排序后的新数组      修不修改原数组:修改原数组
 * 如果是第二个参数 function(a,b){
 *      if(a>b){return 1} return 整数表示就是升序 return 负数表示的降序
 * }
 */
var arr = [1, 11, 32, 23, 202, 58, 69];
var res = arr.sort(function (a, b) {
    if (a > b) {
        // 表示升序
        return 1;
    } else {
        // 表示降序
        return -1;
    }
    // return a - b;
});
console.log(res, arr);



