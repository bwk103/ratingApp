'use strict';
var router = require('express').Router();
var Score = require('../models/score');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/feedback', (req, res) => {
  res.send('The feedback page');
});

router.post('/feedback', (req, res) => {
  var score = new Score({
    rating: req.body.rating,
    comment: req.body.comment,
  });
  score.save((err, score) => {
    if (err) {
      console.error(err);
    } else {
      res.statusCode = 201;
      res.send({
        status: 'Success',
        message: 'Score saved successfully',
      });
    }
  });
});

router.get('/confirm', (req, res) => {
  Score.find({}, function(err, scores){
    if (err) {
      console.error(err);
    } else {
      res.send({
        message: 'Thanks for your feedback',
      });
    }
  });
});

module.exports = router;
