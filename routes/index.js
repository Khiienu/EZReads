var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { Game, sequelize } = db;

/* GET home page. */

router.get(
  "/",
  asyncHandler(async (req, res, next) => {

    let games = await Game.findAll({ order: sequelize.random(), limit: 36 })
    let Systems = await db.System.findAll()


    res.render("home", { title: "Home", Systems, games});


  })
);

module.exports = router;
