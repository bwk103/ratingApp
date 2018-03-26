'use strict';
var app = require('../../app');
var request = require('supertest');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
  //   test('responds with "Hello World" in the body', () => {
  //     request(app).get('/').then((response) => {
  //       return expect(response.text).toBe('Hello World!');
  //     });
  //   });
  // });

  describe('/scores/new', () => {
    // test('get requests respond with a 200 status code', () => {
    //   request(app).get('/feedback').then((response) => {
    //     return expect(response.statusCode).toBe(200);
    //   });
    // });
    test('post requests respond with a 201 status code', (done) => {
      request(app)
        .post('/scores/new')
        .send({ rating: 1, comment: 'Testing' })
        .expect(201, done);
    });
  });

  // describe('/confirm', () => {
  //   test('responds with a 200 status code', done => {
  //     request(app)
  //       .get('/confirm')
  //       .expect(200, done);
  //   });
  // });

  describe('all other paths', () => {
    test('returns a 404 status code', () => {
      request(app).get('/example').then((response) => {
        return expect(response.statusCode).toBe(404);
      });
    });
  });
});
