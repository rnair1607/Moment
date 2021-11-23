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
  tags: [
    {
      index: Number,
      displayValue: String,
    },
  ],
  image: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
    },
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Moment', momentSchema);
