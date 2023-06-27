// var o = {
//     a: 10,
//     b: {
//         // a: 12,
//         fn: function () {
//             console.log(this.a);
//             console.log(this);
//         }
//     }
// };
// o.b.fn.call(o);

var point = {
    x: 0,
    y: 0,
    moveTo: function (x, y) {
        var moveX = function (x) {
            this.x = x;
            console.log(this, 'movex中this');
        };
        // 内部函数
        var moveY = function (y) {
            this.y = y;
        };
        moveX(x);
        moveY(y);
    }
};
point.moveTo(1, 1);
console.log(point.x);//0
console.log(point.y);//0
console.log(x);//1
console.log(y);//1