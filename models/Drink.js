const mongoose = require('mongoose');
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
    type: String
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