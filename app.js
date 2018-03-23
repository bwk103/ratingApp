'use strict';
const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/feedback');
var mongoose = require('mongoose');
var config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use('/feedback', routes);

var { db: { host, port, name } } = config;
var connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(connectionString);

module.exports = app;
