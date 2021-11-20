const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Photo', photoSchema);
