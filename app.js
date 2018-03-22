'use strict';
var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ratingApp');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
