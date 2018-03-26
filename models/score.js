'use strict';
var mongoose = require('mongoose');
var ScoreSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  comment: String,
});
var Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;
