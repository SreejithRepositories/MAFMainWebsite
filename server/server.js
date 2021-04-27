var express = require("express");
var path = require("path");
var cors = require("cors");
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser.json());
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist", "landing_page.html"));
});
app.post("/mail", (req, res) => {
  console.log(req.body);
  res.send("yes received richie rich");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "richierichsree@gmail.com",
      pass: "pandurangamadhappa123#",
    },
  });

  var mailOptions = {
    from: "richierichsree@gmail.com",
    to: "richierichsree@gmail.com",
    subject: req.body.Subject,
    text:
      "From" + " " + req.body.Email + " " + "Message:" + " " + req.body.Message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(3000, () => {
  console.log("started listening");
});
