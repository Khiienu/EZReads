var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { User, Game, Review, System, GamesBySystem } = db;

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    let game = await Game.findByPk(req.params.id, {
      include: [System, Review],
    });

    let currentUser;
    if (req.session.auth) {
      currentUser = req.session.auth.id;
    }

    let users = {};
    let averageScore = 0;
    for (review of game.Reviews) {
      let user = await User.findByPk(review.usersId);
      let userName = user.fullName;
      if (!users[userName]) {
        users[review.usersId] = userName;
      }
      averageScore += Number(review.score);
    }

    if (averageScore != 0)
      averageScore = (averageScore / game.Reviews.length).toFixed(2);
    else averageScore = "?";
    res.render("game", { game, users, currentUser, averageScore });
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      await Review.create({
        gameId: req.params.id,
        usersId: req.session.auth.id,
        content: req.body.content,
        score: req.body.score,
      });
    } catch (e) {
      res.redirect("/login"); //god knows why this would error but here's some handling
    }

    res.redirect(`/games/${req.params.id}`);
  })
);

router.post(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    let review = await Review.findByPk(req.body.reviewId);
    await review.destroy();
    res.redirect(`/games/${req.params.id}`);
  })
);

module.exports = router;
