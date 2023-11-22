const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/circle", (req, res) => {
  res.sendFile(`${__dirname}/circle.html`);
});

app.get("/triangle", (req, res) => {
  res.sendFile(`${__dirname}/triangle.html`);
});

app.post("/triangle", (req, res) => {
  const { height } = req.body;
  const { base } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of triangle is ${area}</h2>`);
});

app.post("/circle", (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of triangle is ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
