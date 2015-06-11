var http = require("http");
var bl = require("bl");
var urlone = process.argv[2];
var urltwo = process.argv[3];
var urlthree = process.argv[4];
var url = process.argv;
var results = [];

for(var i = 2; i < url.length; i++){
	http.get(url[i], function(res){
		bl(function(err, data){
			if(err)
				console.log("http call for %s failed.", url[i]);
			results.push(data.toString());
			console.log(data.toString());
		});
	});		
}
//console.log(results);
