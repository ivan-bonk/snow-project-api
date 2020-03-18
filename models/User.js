const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  havePet: {
    type: Boolean,
  },
  lookingForPet: {
    type: Boolean,
  },
  petId: {
    type: [String],
    default: undefined,
  },
});

module.exports = mongoose.model('users', UserSchema);
