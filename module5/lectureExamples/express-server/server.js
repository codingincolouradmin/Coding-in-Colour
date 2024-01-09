const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("root request recieved");
  const data = {
    title: "My home page",
    content: "the content of my home page",
  };
  res.render("template.ejs", data);
});

app.get("/about", (req, res) => {
  console.log("about request recieved");
  const data = {
    title: "My about page",
    content: "the content of the about page",
  };
  res.render("template.ejs", data);
});

PORT = 3010;
app.listen(PORT, () => {
  console.log("server is running and listening");
});
