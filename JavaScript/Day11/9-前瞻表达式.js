var str = 'Hello, Hi , I am Hilary.';
// 后面一定要匹配什么
// var reg = /(?=i)/g; //Hello, HTi , I am HTilary.
// var reg = /H(?=i)/g; //Hello, Ti, I am Tilary.
// var newStr = str.replace(reg, "T");
// console.log(newStr); 

// 后面一定不要匹配什么
// var reg = /(?!i)/g; // 只要后面不是i 都插入一个T 结果:THTeTlTlToT,T THiT T,T TIT TaTmT THiTlTaTrTyT.T
// var reg = /H(?!i)/g; // 找到H字符 后面不是i H 替换为T 结果:Tello, Hi , I am Hilary.
// var newStr = str.replace(reg, "T");
// console.log(newStr);