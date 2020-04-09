const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  breed: String,
  imgUrl: [],
  characteristics: {
    popularity: {
      type: Number,
      min: 0,
      max: 5,
    },
    training: {
      type: Number,
      min: 0,
      max: 5,
    },
    size: {
      type: Number,
      min: 0,
      max: 5,
    },
    brain: {
      type: Number,
      min: 0,
      max: 5,
    },
    security: {
      type: Number,
      min: 0,
      max: 5,
    },
    childFriendly: {
      type: Number,
      min: 0,
      max: 5,
    },
    agility: {
      type: Number,
      min: 0,
      max: 5,
    },
    problematic: {
      type: Number,
      min: 0,
      max: 5,
    }
  },
  observations: {
    country: String,
    lifetime: String,
    height: String,
    weight: String,
    price: String,
    carePrice: Number, //per month
    careTime: Number,
    careComplications: String,
    walkNumber: Number,
    mealNumber: Number,
    mealWeight: Number,
    medCheckUp: Number,
  },
  ownerInfo: {
    easyTrain: Boolean,
    familyFit: Boolean,
    apartmentFit: Boolean,
    hypoallergenicity: Boolean,
  },
  additionalInfo: {
    about: String,
    specialties: [],
    issues: []
  }
});

module.exports = mongoose.model('pets', PetSchema);

