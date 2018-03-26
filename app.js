'use strict';
require('dotenv').config();
const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/scores');
var mongoose = require('mongoose');
var config = require('./config');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

var { db: { host, port, name } } = config;
var connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(process.env.MONGODB_URI || connectionString, {}).then(
  () => { console.log('Connection with database successful.'); },
  err => { console.log(err); }
);

module.exports = app;
