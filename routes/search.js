var express = require("express");
var router = express.Router();
const { asyncHandler } = require("./utils");
const db = require("../db/models");
const { User, Game, Review } = db;


router.get(
  "/",
  asyncHandler(async (req, res, next) => {
        let searchProperties = {where:{}} //doing it this way allows multiselect system/genre functionality
        
        if (req.body.genre)
            searchProperties.where.genre = req.body.genre;
        if (req.body.system)
            searchProperties.where.system = req.body.system;
        
        if(searchProperties.where.genre || searchProperties.where.system){ //confirm whether ANY search properties have been set
            const searchResults = await Game.findAll(searchProperties);
            if (searchResults)
                res.render('search', searchResults);
            else
                res.json("no games found for search criteria");
        }
        else{
            res.json("no search criteria selected");
        }
  })
);




module.exports = router;