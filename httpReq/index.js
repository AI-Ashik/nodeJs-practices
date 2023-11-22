const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/register", (req, res) => {
  const { fullName } = req.body;
  const { age } = req.body;
  res.send(`<h1>Your name is : ${fullName} and age is ${age}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
