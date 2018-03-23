'use strict';
var app = require('../../app');
var request = require('supertest');
var mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

describe('routing tests', () => {
  describe('/', () => {
    test('responds with a 200 status code', () => {
      request(app).get('/').then((response) => {
        return expect(response.statusCode).toBe(200);
      });
    });

    test('responds with "Hello World" in the body', () => {
      request(app).get('/').then((response) => {
        return expect(response.text).toBe('Hello World!');
      });
    });
  });

  describe('/feedback', () => {
    test('responds with a 200 status code', () => {
      request(app).get('/feedback').then((response) => {
        return expect(response.statusCode).toBe(200);
      });
    });
  });

  describe('/confirm', () => {
    test('responds with a 200 status code', () => {
      request(app).get('/confirm').then((response) => {
        return expect(response.statusCode).toBe(200);
      });
    });
  });

  describe('all other paths', () => {
    test('returns a 404 status code', () => {
      request(app).get('/example').then((response) => {
        return expect(response.statusCode).toBe(404);
      });
    });
  });
});
