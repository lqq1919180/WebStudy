// 实现6 阶乘 递归 函数自己调用自己 跳出条件 
function fc(n){
	// 跳出条件
	if(n==1){return 1}
	return fc(n-1) * n
}
console.log(fc(10))
//  fc(1)  1
// fc(2)=fc(1) * 2
// fc(3)=fc(2) * 3
// fc(n) = fc(n-1) * n


// 1.反转字符串 var str = 'i love china';反转字符串 china love i
// 思路:转为数组 [i,love,china] 将字符串转为数组 str.split(" ")
// 2.1-1000完美数  一个数本身等于它的因子之和 6 = 1 + 2 + 3
// 3.组合数 由1,2,3,4组成的个位 十位  百位 各不相同的三位组合数