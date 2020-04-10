const mongoose = require('mongoose');

const AliasSchema = new mongoose.Schema({
    boys: [],
    girls: []
});

module.exports = mongoose.model('alias', AliasSchema);