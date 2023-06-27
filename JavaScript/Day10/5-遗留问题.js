var arr = [1,2,3,4,5];
Array.prototype.myMap = function(callback,str){
	var newArr = [];
	for(var i=0;i<this.length;i++){
		newArr.push(str?callback.bind(str,this[i])(i,this):callback(this[i]))
	}
	return newArr
}
var res = arr.myMap(function(item,index,arr){
	console.log(this,index,arr)
	return item+5
},'hello');
console.log(res);