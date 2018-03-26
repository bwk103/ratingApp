'use strict';
var app = require('../../app');
var request = require('supertest');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Score = require('../../models/score');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

beforeAll(() => {
  mongoose.connection.collections['scores'].remove();
});

afterAll(() => {
  mongoose.disconnect();
});

describe('routing tests', () => {
  // describe('/', () => {
  //   test('responds with a 200 status code', () => {
  //     request(app).get('/').then((response) => {
  //       return expect(response.statusCode).toBe(200);
  //     });
  //   });
  //

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

  describe('/scores/new', () => {
    describe('successful POST requests', () => {
      test('respond with a 201 status code', async() => {
        var response = await request(app)
          .post('/scores/new')
          .send({ rating: 1, comment: 'Testing' });
        expect(response.statusCode).toBe(201);
      });
      test('return success status', async() => {
        var response = await request(app)
          .post('/scores/new')
          .send({ rating: 10, comment: 'A test' });
        expect(response.body.status).toBe('Success');
      });
      test('return confirmation message', async() => {
        var response = await request(app)
          .post('/scores/new')
          .send({ rating: 5, comment: 'Testing' });
        expect(response.body.message).toBe('Score saved successfully');
      });
    });
    describe('unsuccessful POST requests', () => {
      test('respond with a 500 status code', async() => {
        var response = await request(app)
          .post('/scores/new')
          .send({});
        expect(response.statusCode).toBe(500);
      });
      test('returns the error object', async() => {
        var response = await request(app)
          .post('/scores/new')
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
