'use strict';
const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: 3000,
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'ratingApp',
  },
};

const test = {
  app: {
    port: 3000,
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'ratingAppTest',
  },
};

const config = {
  dev: dev,
  test: test,
};

module.exports = config[env];
