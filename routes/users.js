var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { User } = db;
/* GET users listing. */

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
  csrfProtection,
  asyncHandler(async (req, res) => {
    let { fullName, email, hashedPassword } = req.body;
    await User.create({ fullName, email, hashedPassword });
    res.redirect("/users/login");
  })
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("login", { csrfToken: req.csrfToken() });
  })
);

router.post(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { email, hashedPassword } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user.hashedPassword === hashedPassword) {
        res.redirect("/");
      } else {
        throw new Error();
      }
    } catch (err) {
      return new Error("Incorrect Username or Password");
    }
  })
);

module.exports = router;
