var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { User } = db;
const bcrypt = require("bcryptjs");


router.get(
    "/",
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
    "/",
    csrfProtection,
    loginValidator,
    asyncHandler(async (req, res) => {
      const { email, hashedPassword } = req.body;
      const validatorErrors = validationResult(req);
  
      if (!validatorErrors.isEmpty()) {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render("login", {errors, csrfToken: req.csrfToken() });
      }
  
      try {
        let user = await User.findOne({ where:{ email: email}});
  
        if (await bcrypt.compare(hashedPassword, user.hashedPassword)) {
          req.session.auth = { //to delete a session do "delete req.session.auth"
            email: user.email,
            id: user.id,
          };
          
          res.redirect(`/profile/${user.id}`);
        } else {
          throw new Error();
        }
      } catch (err) {
        return new Error("Incorrect Username or Password");
      }
    })
  );
  
  module.exports = router;