'use strict';
var app = require('../../app');
var request = require('supertest');
var mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

describe('routing tests', () => {
  describe('root path', () => {
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

  describe('all other paths', () => {
    test('returns a 404 status code', () => {
      request(app).get('/example').then((response) => {
        return expect(response.statusCode).toBe(404);
      });
    });
  });
});
