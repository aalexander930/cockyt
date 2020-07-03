const express = require('express');
const router = express.Router();
const Drinks = require('../models/Drinks');

router.get('/', (req, res) => {
  res.render('homePage.pug');
});

router.get('/edit', (req, res) => {
  res.render('edit.pug', {img: img});
});

router.post('/edit', (req, res) => {
  let drink = new Drinks(req.body);
  // drink.name = req.body.name;
  // drink.spirit = req.body.spirit;
  // drink.glass = req.body.glass;
  // drink.i1[drinkName] = req.body.i1.drinkName;
  // drink.i1[drinkMeasure] = req.body.i1.measurement;

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