var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { Game } = db;
/* GET home page. */

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    let games = await Game.findAll();

    res.render("index", { title: "Home" });
  })
);

module.exports = router;
