
var list = process.argv;

if(list.length <= 2){
	console.log("Arg length too short.  Length %s", list.length);
}
	

var sum = 0;
for (var i = 2; i <= list.length - 1 ; i ++){
	//sum += Number(list[i]);
	sum += +list[i];
}
console.log(sum);