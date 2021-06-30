var express = require("express");
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { System, Game } = db;

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    let system = await System.findByPk(req.params.id, { include: Game });
    // res.json(system);
    res.render("system", {system});
  })
);

module.exports = router;
