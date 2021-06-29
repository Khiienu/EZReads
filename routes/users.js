var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { User, Game, Review } = db;
const bcrypt = require("bcryptjs");
/* GET users listing. */

const userValidation = [
  check("email")
    .exists()
    .withMessage("Please enter an email")
    .isEmail()
    .withMessage("Please enter a valid email"),
  check("hashedPassword")
    .exists()
    .withMessage("Please enter a password")
    .isLength({ min: 4 })
    .withMessage("Password must be longer than 3 characters"),
  check("fullName")
    .exists()
    .withMessage("Please enter a full name")
    .isLength({ max: 75 })
    .withMessage("Full name cant be longer than 75 characters"),
];

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.render("login", {});
  })
);

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("signup", { csrfToken: req.csrfToken() });
  })
);

router.post(
  "/signup",
  userValidation,
  asyncHandler(async (req, res) => {
    let { fullName, email, hashedPassword } = req.body;

    hashedPassword = await bcrypt.hash(hashedPassword, 2);

    const user = db.User.build({ fullName, email, hashedPassword });

    const validatorErrors = validationResult(req);

    // const user = User.create({ fullName, email, hashedPassword });

    if (validatorErrors.isEmpty()) {
      await user.save();
      res.json(user);
      res.redirect("/users/login");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      // res.json(errors);
      res.render("signup", user, errors, { csrfToken: req.csrfToken() });
    }
  })
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("login", { csrfToken: req.csrfToken() });
  })
);

const loginValidator = [
  check("email")
    .exists()
    .withMessage("Please enter an email")
    .isEmail()
    .withMessage("Please enter a valid email"),
];

router.post(
  "/login",
  csrfProtection,
  loginValidator,
  asyncHandler(async (req, res) => {
    const { email, hashedPassword } = req.body;
    const validatorErrors = validationResult(req);

    if (!validatorErrors.isEmpty()) {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("login", errors, { csrfToken: req.csrfToken() });
    }

    try {
      let user = await User.findOne({ email });

      if (await bcrypt.compare(hashedPassword, user.hashedPassword)) {
        req.session.auth = {
          email: user.email,
          id: user.id,
        };
        //to delete a session do "delete req.session.auth"
        res.redirect("/");
      } else {
        throw new Error();
      }
    } catch (err) {
      return new Error("Incorrect Username or Password");
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userGames = await db.GameShelve.findAll({
      where: { userId: req.params.id },
    });

    const user = await db.User.findByPk(req.params.id);

    res.render("profile", userGames, user);
  })
);

router.get(
  "/:id/:shelf",
  asyncHandler(async (req, res) => {
    const userGames = await db.GameShelve.findAll({
      where: {
        usersId: req.params.id,
        status: req.params.shelf,
      },
      include: Game,
    });
    res.json(userGames);
    const user = await db.User.findByPk(req.params.id);

    // res.render("profile", userGames, user);
  })
);

module.exports = router;
