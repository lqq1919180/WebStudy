// while(结束条件){
// 	循环体
// }
// 求1-100和
var result = 0, i = 0;
while (i <= 100) {
    // console.log('22222') //不满足条件不会进入到循环体中
    result += i;//result = result + i
    i++;
}
console.log(result);

// 1-100和
var result = 0, i = 101;
do {
    console.log('1111');
    result += i;
    i++;
} while (i <= 100);
console.log(result); // 101
