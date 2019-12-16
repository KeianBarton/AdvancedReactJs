const express = require("express");
const config = require("./config");

const app = express();

app.use(express.static("public")); // statically served content served directly
app.set("view engine", "ejs");     // set templating language

app.get("/", (req, res) => {
  res.render("index", { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});