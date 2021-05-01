var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();
app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist", "landing_page.html"));
});

app.listen(3000, () => {
  console.log("started listening");
});
