const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

//define paths for express config
const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handle bars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//set up static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Shivam"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Shivam"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    msg: "this is help messeage i will help in every way",
    title: "Help",
    name: "Shivam"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forcast: "its 50 degrees",
    location: "mandi dabwali"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    name: "Shivam",
    errormsg: "Help article not found",
    title: "404 page"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    name: "Shivam",
    errormsg: "page not found",
    title: "404 page"
  });
});
//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
