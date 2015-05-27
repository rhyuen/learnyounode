var fs = require("fs");
var path = process.argv[2];

var content = fs.readFileSync(path);
var delimiter = "\n";
console.log(content.toString().split(delimiter).length - 1);