// let sy1 = Symbol('tel');
// let obj = {
//     [Symbol('email')]: '268105555@qq.com',
//     [sy1]: '11111'
// };
// console.log(obj[Symbol('email')], obj[sy1]);

// for (var i = 0; i < 5; i++) {
//     (function () {
//         console.log(i);
//     })(i);
// }

for (var i = 0; i < 5; i++) {
    (function () {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i);
}