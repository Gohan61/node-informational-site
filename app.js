const exp = require("constants");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", function (req, res) {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.get("/contact-me", function (req, res) {
  res.sendFile("./pages/contact-me.html", { root: __dirname });
});

app.use(function (req, res) {
  res.sendFile("./pages/404.html", { root: __dirname });
});

app.listen(port, function () {});
