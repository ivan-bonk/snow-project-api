const mongoose = require('mongoose');

const BreedSchema = new mongoose.Schema({
    breeds: []
});

module.exports = mongoose.model('breeds', BreedSchema);