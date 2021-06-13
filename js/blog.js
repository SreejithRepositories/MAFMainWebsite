// var convertToHtml = require("markdown-to-html-converter");

var fs = require("fs");
var path = require("path");
var md2json = require("md-2-json");
var showdown = require("showdown");
const dirname = path.join(__dirname, "../posts/blog");
const dirname1 = path.join(__dirname, "../posts/blog/");
var filenames = [];
converter = new showdown.Converter();
fs.readdir(dirname, (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
    files.forEach((file) => {
      fs.readFile(dirname1 + file, "utf8", (err, data) => {
        if (err) {
          return console.log(err);
        }
        // console.log(data);
        // console.log(md2json.parse(data));
        console.log(converter.makeHtml(data));
      });
    });
  }
});
