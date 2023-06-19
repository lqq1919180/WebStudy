// 1.反转字符串 var str = 'i love china';反转字符串 china love i  
var str = 'i love china';
var reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);
/**
 * 1.str.split(' ') 将字符串按照空格进行切割，返回一个数组 `['i', 'love', 'china']`
 * 2. .reverse() 将数组进行反转，返回 `['china', 'love', 'i']`
 * 3. .join(' ')  将数组按照空格拼接成字符串，返回 `'china love i'`
 * 4. console.log(reversedStr) 输出反转后的字符串 china love i
 */


// 2. 1-1000完美数  一个数本身等于它的因子之和 6 = 1 + 2 + 3
function findPerfectNumbers (start, end) {
    // 一层处理完美数本身
    for (let i = start; i <= end; i++) {
        // 一层处理因子之和
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                sum += j;
            }
        }
        if (sum === i) {
            console.log(i + "是完美数");
        }
    }
}

findPerfectNumbers(1, 1000); // 6 28 496 是完美数

// 3.由1, 2, 3, 4组成的个位 十位  百位 各不相同的三位组合数;
function generateCombination () {
    var combinations = [];
    //处理百位
    for (var i = 1; i <= 4; i++) {
        //处理十位
        for (var j = 1; j <= 4; j++) {
            // 处理个位
            for (var k = 1; k <= 4; k++) {
                if (i !== j && i !== k && j !== k) {
                    var combination = i * 100 + j * 10 + k;
                    combinations.push(combination);
                }
            }
        }
    }
    return combinations;
}

console.log(generateCombination());

/**[123, 124, 132, 134, 142,
    143, 213, 214, 231, 234,
    241, 243, 312, 314, 321,
    324, 341, 342, 412, 413,
    421, 423, 431, 432;]
    */