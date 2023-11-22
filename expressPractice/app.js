const express = require("express");

const app = express();

const userRoutes = require("./routes/users.route");

app.use("/user", userRoutes);

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(`${__dirname}/views/register.html`);
});
app.use("/login", (req, res) => {
  res.cookie("name", "rabya");
  res.end();
});

app.use((req, res) => {
  res.send("<h1>404 page not found</h1>");
});

module.exports = app;
