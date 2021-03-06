var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const db = require("../db/models");
const { User, Game, Review, GameShelve } = db;

router.get(
  //TODO: redirect to logged in user's profile if there is a user logged in
  "/",
  asyncHandler(async (req, res, next) => {
    if (req.session.auth) res.redirect(`/profile/${req.session.auth.id}`);
    else res.redirect("/login");
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userGames = await db.GameShelve.findAll({
      where: { usersId: req.params.id },
      include: Game,
    });
    let frontGameArray = [];
    for(let i = 0; i < userGames.length; i++) {
      if(userGames[i].status === 'have_played'){
        frontGameArray.push(userGames[i])
        break
      }
    }
    for(let i = 0; i < userGames.length; i++) {
      if(userGames[i].status === 'want_play'){
        frontGameArray.push(userGames[i])
        break
      }
    }
    for(let i = 0; i < userGames.length; i++) {
      if(userGames[i].status === 'currently_playing'){
        frontGameArray.push(userGames[i])
        break
      }
    }
    console.log(frontGameArray)


    const user = await db.User.findByPk(req.params.id);
    res.render("profile", { userGames, user, frontGameArray });
    // res.json({frontGameArray})
  })
);

router.get(
  "/:id/:shelf",
  asyncHandler(async (req, res) => {
    try {
      const userGames = await db.GameShelve.findAll({
        where: {
          usersId: req.params.id,
          status: req.params.shelf,
        },
        include: Game,
      });
      let shelfName = "Invalid Shelf Name";
      if (req.params.shelf === "want_play") {
        shelfName = "Want to Play";
      } else if (req.params.shelf === "currently_playing") {
        shelfName = "Currently Playing";
      } else if (req.params.shelf === "have_played") {
        shelfName = "Have Played";
      }
      const reviews = await db.Review.findAll({
        where: { usersId: req.params.id },
      });
      res.render("gameShelf", { userGames, reviews, shelfName });
    } catch (err) {
      throw new Error("Invalid userId or gameshelf");
    }
  })
);
router.post(
  //add game to game shelf for logged in user: this POST is activated by clicking on the "add" button on a game page
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    //req should contain gameId and shelf to add to in req.body.gameId and req.body.status

    try {
      const test = await db.GameShelve.findOne({
        where: {
          //test to see if game already is on a shelf for this user
          usersId: req.params.id,
          gameId: req.body.gameId,
        },
      });
      if (!test) {
        //if it doesn't, add the game
        await db.GameShelve.create({
          gameId: req.body.gameId,
          usersId: req.params.id,
          status: req.body.status,
        }); //we could read userId from the session instead I guess???
        res.redirect(`/games/${req.body.gameId}`);
      } else {
        test.status = req.body.status;
        await test.save();
        res.redirect(`/games/${req.body.gameId}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  })
);

const logoutUser = (req, res) => {
  delete req.session.auth;
};

router.post("/logout", (req, res, next) => {
  logoutUser(req, res);
  req.session.save((error) => {
    if (error) next(error);
    else return res.redirect("/");
  });
});

module.exports = router;
