var m2j = require("markdown-to-json");
var fs = require("fs");
var path = require("path");

fs.readdir(path.join(__dirname, "../posts/blog"));
