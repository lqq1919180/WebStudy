// 同真才为真 有假且为假
// 如果两个操作数第一个是假的 返回第一个操作数 null "" NaN false undefined 假的操作数
//如果两个操作数第一个是真的 返回第二个操作数
console.log(null && 'hello');
console.log("" && 'hello');
console.log(false && 'hello');
console.log(undefined && 'hello');
console.log('hello' / 10 && 'hello');
console.log('hello' && 'world');

var a = 10, b = 5; //并且 既满足前面表达式 又满足后面表达式
if (a >= 10 && b < 6) {
    console.log('满足条件')
} else {
    console.log('不满足条件')
}

// || 或者 满足其中之一条件就能进入条件语句
if (a < 10 || b > 3) {
    console.log('满足条件')
} else {
    console.log('不满足条件')
}

/**
 * 或者操作数 如果第一个操作数是假的 返回第二个操作数
 * 如果第一个操作数是真的 直接返回第一个操作数
 * 有真则为真 同假才为假
 */
console.log(null || 'hello');
console.log('hello' || null);

console.log(!null);
console.log(!undefined);
console.log(!'');
console.log(!100);
console.log(!'abc');
console.log(!100 / 'hello');