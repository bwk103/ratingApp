'use strict';
var router = require('express').Router();
var Score = require('../models/score');
var scoreController = require('../controllers/scoreController');

router.get('/', scoreController.get_home); 

router.get('/feedback', (req, res) => {
  res.send('The feedback page');
});

router.post('/feedback', (req, res) => {
  var score = new Score({
    rating: req.body.rating,
    comment: req.body.comment,
  });
  score.save(function(err, score){
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log(score);
      res.redirect('/confirm');
    }
  });
});

router.get('/confirm', (req, res) => {
  Score.find({}, function(err, scores){
    if (err) {
      console.log(err);
    } else {
      var count = scores.length;
      var avg = scores.reduce(function(sum, score){
        var accumulator = sum += score.rating;
        return accumulator;
      }, 0) / count;
      console.log(`Count is ${count}, avg is ${avg}`);
      res.send('Thanks for your feedback');
    }
  });
});

module.exports = router;
