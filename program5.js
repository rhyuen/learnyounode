var fs = require("fs");
var path = process.argv[2];
var ext = process.argv[3];
var delimiter = ".";

fs.readdir(path, function(err, list){
	if (list === null)
		return;
	for(var i = 0; i < list.length; i++){
		var splitten = list[i].split(delimiter);
		if(splitten.length === 2 && splitten[1] == ext)
			console.log(list[i]);	
	}
});