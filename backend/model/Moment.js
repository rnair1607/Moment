const mongoose = require('mongoose');

//Moment schema
const momentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 3,
  },
  comment: {
    type: String,
    required: true,
    min: 3,
  },
  image: {
    type: String,
    required: true,
    min: 3,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Moment', momentSchema);
