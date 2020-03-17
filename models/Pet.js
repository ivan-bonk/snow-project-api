const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    //img: {}
    alias: String,
    description: String,
    popularity: {
        type: Number,
        min: 0,
        max: 5
    },
    training: {
        type: Number,
        min: 0,
        max: 5
    },
    size: {
        type: Number,
        min: 0,
        max: 5
    },
    mind: {
        type: Number,
        min: 0,
        max: 5
    },
    protection: {
        type: Number,
        min: 0,
        max: 5
    },
    childRelation: {
        type: Number,
        min: 0,
        max: 5
    },
    agility: {
        type: Number,
        min: 0,
        max: 5
    },
    problem: {
        type: Number,
        min: 0,
        max: 5
    },
    country: String,
    lifeDuration: String,
    height: String,
    weight: String,
    price: String,
    maintenancePrice: Number, //per month
    careTime: Number, //per day
    suitForFlat: Boolean,
    suitForFamily: Boolean,
    specificity: String,
    problems: String
});

module.exports = mongoose.model('pets', PetSchema);