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

router.post(
  "/:id",
  asyncHandler(async (req, res) => { //either include logged in userID in the req or we need to grab it from the session here?
    
    try{
      await Review.create({ gameId: req.params.id, userId: req.body.userId, content: req.body.content, score: req.body.score });
    }
    catch(e){
      res.json("something went wrong") //god knows why this would error but here's some handling
    }

    res.render(`game/${req.params.id}`);
  })
);

module.exports = router;