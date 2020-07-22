require('../models/Drink');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Drink = mongoose.model('Drink');
const {catchErrors} = require('../handlers/errorHandlers');
const drinkController = require('../controllers/drinkController');

router.get('/', catchErrors(drinkController.homePage));


router.get('/about', (req, res) => {
  res.render('about.pug', {title: "About page"});
});

router.get('/drinks/:slug', catchErrors(drinkController.getDrinkBySlug));
router.get('/drinks', catchErrors(drinkController.getDrinks));

router.get('/edit', (req, res) => {
  res.render('edit.pug');
});

router.post('/edit', (req, res) => {
  let drink = new Drink(req.body.json);

  drink.save(function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect('/');
      console.log(req.body)
    }
  })
})



module.exports = router;