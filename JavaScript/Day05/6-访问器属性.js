var book = {
    // _开头属性 一般表示的对象的私有属性 一般不直接访问 一般使用其他属性替代
    _year: 2023
};
// 访问器属性不可以直接定义 必须使用defineProperty方法 set和get函数 配置属性是否可读或者可写
Object.defineProperty(book, 'year', {
    // configurable: false,
    // enumerable: false,
    get: function () {
        console.log('读取成功');
        return this._year;
    },
    set: function (newYear) {
        // 监听到值的变化
        if (this._year != newYear) {
            this._year = newYear;
        }
    }
});
book.year = 2024;//触发set函数
console.log(book.year, book._year);