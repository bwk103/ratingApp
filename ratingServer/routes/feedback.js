'use strict';
var router = require('express').Router();
var Score = require('../models/score');

router.get('/', (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/scores/new', async(req, res) => {
  var score = new Score({ rating: req.body.rating, comment: req.body.comment });
  try {
    await score.save();
    res.status(201).send({ status: 'Success',
      message: 'Score saved successfully'});
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/scores', async(req, res) => {
  try {
    var allScores = await Score.find({});
    res.send(allScores);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get('/feedback', (req, res) => {
//   try {
//     res.send('The feedback page');
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.get('/confirm', async(req, res) => {
//   try {
//     // var allScores = await Score.find({});
//     res.send({ message: 'Thanks for your feedback' });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
