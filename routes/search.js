var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const db = require("../db/models");
const {Game, System, Genre, sequelize} = db;


router.post(
  "/",
  asyncHandler(async (req, res, next) => {
        const {genre, system} = req.body;
        let games;

        if(genre || system){ //confirm whether ANY search properties have been set
            
            if (genre && (!system))
                games = await Game.findAll({where: {primaryGenre: genre}, order: sequelize.random()});
            else if (system && (!genre)) 
                games = await Game.findAll({include: [{model: System, where: { system: system }}], order: sequelize.random()});
            else{
                games = await Game.findAll({where: {primaryGenre: genre}, include: [{model: System, where: { system: system }}], order: sequelize.random()});
            }
            
            
            if (games){
                res.render('home', {games});
            }
            else
                res.json("no games found for search criteria");
        }
        else{
            res.json("no search criteria selected");
        }
  })
);



module.exports = router;