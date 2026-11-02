const express = require("express");
const app = express();
const web_files = express.static("public");

//Changes must go here

app.get("/hello", function(req, res) {
   res.end("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res) {
   res.end('<head><link rel="stylesheet" href="/style.css"></head> <body><h1>Goodbye, Express!</h1></body>');
});

app.listen(process.env.PORT || 3000, function() {
   console.log("Listening on port 3000...");
});