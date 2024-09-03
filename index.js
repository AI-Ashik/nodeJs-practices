const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/public`)));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files/", (err, files) => {
    res.render("index", { files });
  });
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata });
  });
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    res.redirect("/");
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    }
  );
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}.txt`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
