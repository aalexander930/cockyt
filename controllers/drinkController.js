const mongoose = require('mongoose');
const Drink = mongoose.model('Drink');
const axios = require('axios');



exports.homePage = async (req, res) => {
  const ginDrinks = await Drink
  .find( {spirit: 'gin'} )
  .limit(4);

  const whiskeyDrinks = await Drink 
  .find( {spirit: 'whiskey'} )
  .limit(4);

  const rumDrinks = await Drink 
  .find( {spirit: 'rum'} )
  .limit(4);

  res.render('homePage', {ginDrinks, whiskeyDrinks, rumDrinks} )
}

exports.getDrinkBySlug = async (req, res, next) => {
  const drink = await Drink.findOne({ slug: req.params.slug });
  res.render('drink.pug', { drink });
  console.log(drink);
};

exports.getGinDrinks = async (req, res) => {
  const ginDrinks = await Drink.find( {spirit: 'Gin' } );
  console.log(ginDrinks);
  res.json(ginDrinks)
}

exports.getDrinkBySpirit = async (req, res) => {
  const result = await Drink.find( { spirit: req.params.spirit });
  res.json(result)
  console.log(req.params.spirit)
}

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



exports.getResults = async (req, res, next) => {
  if (req.query.q) {
    const query = req.query.q    
    const drinks = await Drink
    .find({
      $text: {
        $search: `"${req.query.q}"`
      }

    }, {
      score: { $meta: 'textScore' }
    })
    .sort({
      score: { $meta: 'textScore' }
    });
    res.render('results', { drinks, query } )
    console.log(req.query.q)
  } else {
      res.redirect('/')
  }
}


