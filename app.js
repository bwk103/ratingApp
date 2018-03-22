'use strict';
const express = require('express');
var app = express();
var routes = require('./routes/feedback');

app.use('/', routes)
app.use('/feedback', routes)

module.exports = app;
