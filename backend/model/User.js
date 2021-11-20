const mongoose = require('mongoose');

//User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  city: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  mobileNo: {
    type: String,
    required: true,
    min: 13,
    max: 13,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
