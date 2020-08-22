const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;
const slug = require('slugs');

const DrinksSchema = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String
  },
  spirit: {
    type: String,
    lowercase: true
  },
  glass: {
    type: String
  },
  instructions: {
    type: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  date: { type: Date, default: Date.now },
  ingredients: [{
    iName: {
      type: String
    }, 
    iAmount: { 
      type: Number
    },
    iMeasure: {
      type: String
    }
  }]

});
DrinksSchema.plugin(random);

DrinksSchema.index({
  'name': 'text',
  'ingredients.iName': 'text',
  'spirit': 'text'
})



// db.collection.createIndex({"name": 1});
// db.collection.createIndex({"ingredients.iName": 1});


// DrinksSchema.pre('save', async function(next) {
//   if (!this.isModified('name')) {
//     next(); // skip it
//     return; // stop this function from running
//   }
//   this.slug = slug(this.name);
//   // find that other stores that have slug, slug-1, slug-2, etc
//   const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
//   const drinksWithSlug = await this.constructor.find( {slug: slugRegEx });
//   if(drinksWithSlug.length) {
//     this.slug = `${this.slug}-${drinksWithSlug.length + 1}`; // if a store already exists, we create another with that slug name and add a '-' and a number iterating by 1
//   }
//   next();
// })

module.exports = mongoose.model('Drink', DrinksSchema);