var fs = require("fs");

module.exports = function(path, ext, handler){
	fs.readdir(path, function(err, filelist){
		if(err)
			return handler(err);
		
		if(filelist.length === 0)
			return handler(err);
		
		
		var data = [];
		for(var i = 0; i < filelist.length; i++){
			var delimit = ".";
			if(filelist[i].split(delimit) !== 2)
				return handler(err);
			if(filelist[i].split(delimit)[1] !== ext)
				return handler(err);
			data.push(filelist[i]);	
			console.log(filelist[i].split(delimit)[1]);					

		}
		
		return handler(null, data);
		
	});
};



//print to console only from the original file not the module.
//callback contains all the information.

/*
	next(new Error("console error msg"));
	
	next(null, results);
	
	fs.readFile("test.txt", callback);
	
	var callback function(err, data){
		if(err)
			return console.error(err);
		console.log(data);
	}
*/