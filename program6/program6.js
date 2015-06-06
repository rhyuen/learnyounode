//program6.js

var mymodule = require("./mymodule.js");
var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext,	function(err, data){
	if(err)
		throw err;
	if(data === null)
		throw err;
	
	
	
	//for(var row = 0; row < data.length; row++){
		console.log(data);
	//}
});