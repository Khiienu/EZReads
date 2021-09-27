var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { User } = db;
const bcrypt = require("bcryptjs");



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
    csrfProtection,
    asyncHandler(async (req, res) => {
      res.render("signup", { csrfToken: req.csrfToken() });
    })
);

router.post(
    "/",
    userValidation,
    csrfProtection,
    asyncHandler(async (req, res) => {
        let { fullName, email, hashedPassword } = req.body;

        hashedPassword = await bcrypt.hash(hashedPassword, 2);

        const user = db.User.build({ fullName, email, hashedPassword });

        const validatorErrors = validationResult(req);

        // const user = User.create({ fullName, email, hashedPassword });

        if (validatorErrors.isEmpty()) {
            await user.save();
            const newUser = await User.findOne({ where: { email: email }});
            req.session.auth = {
                email: newUser.email,
                id: newUser.id
            };

            res.redirect(`/profile/${newUser.id}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("signup", { user, errors, csrfToken: req.csrfToken() });
        }
    })
);

module.exports = router;
