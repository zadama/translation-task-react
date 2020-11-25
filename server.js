const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

app.use("/static", express.static(path.join(__dirname, "/build/static")));
app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "/build/"),
  });
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
