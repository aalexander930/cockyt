const mongoose = require('mongoose');
const Drink = mongoose.model('Drink');

exports.homePage = (req, res) => {
  res.render('homePage')
}

exports.getDrinkBySlug = async (req, res, next) => {
  const drink = await Drink.findOne({ slug: req.params.slug });
  // if(!drink) { // if the url is wrong/store doesn't exist, error handle
  // next();
  // return
  // }
res.render('drink', { drink, title: store.name })
};
