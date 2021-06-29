var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { User, Game, Review } = db;

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    let game = await Game.findByPk(req.params.id, { include: Review });
    res.render("game", game);
  })
);

module.exports = router;
