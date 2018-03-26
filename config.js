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

const production = {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
  },
};

const config = {
  dev: dev,
  test: test,
  production: production,
};

module.exports = config[env];
