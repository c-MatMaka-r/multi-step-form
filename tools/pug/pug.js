const pug = require("pug");
const fs = require("fs");

const srcFile = "./src/assets/pug/index.pug";
const options = {
  filename: "index",
  basedir: "./src/assets/pug/",
  doctype: "html",
};

var html = pug.renderFile(srcFile, options);

fs.appendFile("./src/index.html", html, function (err) {
  if (err) throw err;
  console.log("Completed!");
});

exports.getHtml = () => html;
