var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { Game } = db;
/* GET home page. */

router.get(
  "/",
  asyncHandler(async (req, res, next) => {

    let games = await Game.findAll({ limit: 21 });
    let Systems = await db.System.findAll()

    res.render("home", { title: "Home", Systems, games});

  })
);

module.exports = router;
