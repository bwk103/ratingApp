'use strict';
var app = require('../../app');
var request = require('supertest');
var mongoose = require('mongoose');
var Score = require('../../models/score');

beforeAll(() => {
  mongoose.connection.collections['scores'].remove();
});

afterAll(() => {
  mongoose.disconnect();
});

describe('routing tests', () => {
  describe('/', () => {
    test('responds with a 200 status code', async() => {
      var response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });
  describe('/scores', () => {
    describe('successful GET requests', () => {
      beforeEach(() => {
        Score.create({rating: 6, comment: 'A test'});
      });
      afterEach(() => {
        mongoose.connection.collections['scores'].remove();
      });
      test('responds with 200 status code', async() => {
        var response = await request(app)
          .get('/scores');
        expect(response.statusCode).toBe(200);
      });
      test('returns an array of scores', async() => {
        var response = await request(app)
          .get('/scores');
        expect(response.body.length).toBe(1);
      });
    });
    describe('edge case GET requests', () => {
      test('returns [] when there are no scores in the db', async() => {
        var response = await request(app)
          .get('/scores');
        expect(response.body.length).toBe(0);
      });
    });
  });

  describe('/scores', () => {
    describe('successful POST requests', () => {
      test('respond with a 302 (redirect) status code', async() => {
        var response = await request(app)
          .post('/scores')
          .send({ rating: 1, comment: 'Testing' });
        expect(response.statusCode).toBe(302);
      });
    });
    describe('unsuccessful POST requests', () => {
      test('respond with a 500 status code', async() => {
        var response = await request(app)
          .post('/scores')
          .send({});
        expect(response.statusCode).toBe(500);
      });
      test('returns the error object', async() => {
        var response = await request(app)
          .post('/scores')
          .send({});
        expect(response.errors).not.toBeTruthy;
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
