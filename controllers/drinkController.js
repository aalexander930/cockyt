const mongoose = require('mongoose');
const Drink = mongoose.model('Drink');
const axios = require('axios');



exports.homePage = (req, res) => {
  res.render('homePage')
}

exports.getDrinkBySlug = async (req, res, next) => {
  const drink = await Drink.findOne({ slug: req.params.slug });
  res.render('drink.pug', { drink });
  console.log(drink);
};

exports.getDrinks = async (req, res) => {
  const drinks = await Drink.find()
  res.render('drinks', { title: 'Drink Recipes', drinks });
}

exports.searchDrinks = async (req, res) => {
  const drinks = await Drink
  .find({
    $text: {
      $search: req.query.q
    }
  }, {
    score: { $meta: 'textScore' }
  })
  .sort({
    score: { $meta: 'textScore' }
  });
  
  res.json(drinks)
  next();
}

exports.searchTest = async (req, res, next) => {
  work = await axios(`/api/v1/search?q=${req.body.q}`)
  res.json(work);
  next();

}

exports.getResults = async (req, res) => {
  const drinks = await Drink
  .find({
    $text: {
      $search: req.query.q
    }
  }, {
    score: { $meta: 'textScore' }
  })
  .sort({
    score: { $meta: 'textScore' }
  });
  res.render('results', { drinks })
}


