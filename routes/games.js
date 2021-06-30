var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { User, Game, Review } = db;

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    let game = await Game.findByPk(req.params.id, { include: Review });
    // res.json(game);
    let users = {};
    for (review of game.Reviews) {
      let user = await User.findByPk(review.usersId);
      let userName = user.fullName;
      if (!users[userName]) {
        users[review.usersId] = userName;
      }
    }
    res.render("game", { game, users });
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      await Review.create({
        gameId: req.params.id,
        userId: req.session.auth.id,
        content: req.body.content,
        score: req.body.score,
      });
    } catch (e) {
      res.json("something went wrong"); //god knows why this would error but here's some handling
    }

    res.render(`game/${req.params.id}`);
  })
);

module.exports = router;
