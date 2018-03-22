'use strict';
var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/feedback', (req, res) => {
  res.send('The feedback page');
});

module.exports = router;
