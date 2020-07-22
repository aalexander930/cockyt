const mongoose = require('mongoose');
const Drink = mongoose.model('Drink');

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


