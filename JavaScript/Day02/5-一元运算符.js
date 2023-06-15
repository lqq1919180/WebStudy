// console.log(10 + 20);
// console.log(10 + '20');

// 取正数
// var num = 6;
// console.log(+num);

// 在其他数据类型前加+ 可以隐式将其他数据类型转换为number类型
// console.log(+true, typeof +true);
// console.log(+'10', typeof +'10');
// console.log(+null, typeof +null);
// console.log(+undefined, typeof +undefined);
// console.log(+'hello', typeof +'hello');
// console.log(+{}, typeof +{});

//字符串拼接 需要两个或者两个以上操作数
// console.log(1 + 2 + 3 + '4');

// 取负 也可以隐式将其他数据类型转换为number类型
// var a = -1;
// console.log(-a);
// console.log(-'hello', typeof -'hello');
// console.log(-{}, typeof -{});
// console.log(-null, typeof -null);
// console.log(-undefined, typeof -undefined);
// console.log(-[1, 2, 3], typeof -[1, 2, 3]);
// console.log(-1);
// console.log("hello js");

// 递增 ++ 先自增 再赋值
// var num = 1;
// var a = ++num;
// console.log(a, num); //2 2

// 递增 后++ 先赋值 再自增
// var num = 1;
// var a = num++;
// console.log(a, num); //1 2

// ！取反
// var a; //undefined !false => true
// if(!a){
//     console.log('满足条件');
// }else{
//     console.log('不满足条件');
// }
// console.log(Boolean(undefined)); //false
// console.log(!"");   //true
// console.log(!2);    //false
// console.log(!null); //true
// console.log(!undefined); //true
// console.log(!{}); //false

// delete 可以删除对象属性 删除数组元素
// var obj = {
//     name:'zhangsan',
//     age:12
// }
// console.log(obj);
// // 删除对象属性
// delete obj.name;
// console.log(obj);

// 数组可以是任意数据类型
// arr[index] 访问数组元素 index下标 索引
// var arr1 = [true,null,undefined,{name:'zhangsan'},10,function(){},Symbol('name')];

// console.log(arr1);
// console.log(arr1[4]);
// // 删除数组元素
// delete arr1[5];
// console.log(arr1);