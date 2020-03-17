const mongoose = require('mongoose');

const UserPetSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    walkCount: {    
        type: Number
    },
    foodCount: {  // weight in gram
        type: Number
    },
    PECount: {  //Phisical Examination Count
        type: Number
    }

});

module.exports = mongoose.model('user_pet', UserPetSchema);