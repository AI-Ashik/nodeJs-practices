const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am a get request at home route");
});

router.get("/about", (req, res) => {
  res.send("I am a get request at about route");
});

module.exports = router;
