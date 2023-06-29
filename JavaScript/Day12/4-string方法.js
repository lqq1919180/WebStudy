//说出string类型的10个方法 
/**
 * 1.charAt(index) 2.charCodeAt(index) 3.concat() 4.slice() 5.substring() 6.substr
 * 7.indexOf() 8.lastIndexOf() 9.toLowerCase 10.toUpperCase 11.toLocaleLowerCase
 * 12.toLocaleUpperCase 13.match 14.split 15.search 16.replace 
 */
/**
 * 字符方法
 * 1.charAt(index); 返回值:返回指定位置得字符
 * 2.charCodeAt(index)  返回值:返回指定位置字符得unicode编码
 */
// var str = 'hello';
// console.log(str.charAt(2));
// console.log(str.charCodeAt(2));

/**
 * 操作方法
 * 1.concat 拼接字符串 参数：要拼接得字符串 返回值：返回拼接好的字符串
 * 2.slice 截取字符串 参数start end  返回值:从start位置开始截取字符串到end(不包括end)位置
 * 3.substring 截取字符串 参数start end 返回值:从start位置开始截取字符串到end(不包括end)位置
 * 4.substr 截取字符串 参数start length 返回值:从start位置开始截取长度length得字符串
 */
// concat方法
// var str = 'hello';
// var str1 = 'hi';
// var str2 = 'world';
// var res =str.concat(str1,str2);
// console.log(res,str);

//slice方法
// var str = 'hello';
// var res = str.slice(-3,-1);
// console.log(res,str);

// substring方法 
// var str = 'hello';
// var res = str.substring(0,4); //hell
// // var res = str.substring(0); //hello
// console.log(res,str)

//substr
// var str = 'hello';
// var res = str.substr(0,5); //(开始位置,截取的数组长度)
// console.log(res,str);


/**
 * 查找字符串字符方法
 * 1.indexOf  参数:查找得字符 index(可选) 返回值:返回第一次查到字符索引或者-1
 * 2.lastIndexOf 参数：从后往前查找得字符 index(可选)  返回值:返回第一次查到字符索引或者-1
 */
// var str = 'hello world';
// var res = str.indexOf('o', 5);
// // var res = str.lastIndexOf('o',6);
// console.log(res,str);


/**
 * 将字符串字符转为大小写
 * 1.toLowerCase 将字符串字符全部转为小写
 * 2.toUpperCase 将字符串字符全部转为大写
 */
// var str = 'hello world';
// var str1 = 'HELLO WORLD';
// var res = str.toUpperCase();
// var res1 = str1.toLowerCase();
// var res2 = str1.toLocaleLowerCase();
// var res3 = str.toLocaleUpperCase();
// console.log(res, res1, res2, res3);


/**
 * match replace search split
 */
// var str = 'hello';
// var reg = /l/g;
// console.log(str.match('l'))
// console.log(str.replace(reg,'L'));
// console.log(str.search('o'));
// console.log(str.split());