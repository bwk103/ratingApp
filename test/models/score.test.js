'use strict';
var Score = require('../../models/score');

describe('Score', () => {
  test('is not valid if a rating is not provided', () => {
    var score = new Score({
      rating: null,
      comment: 'Random comment',
    });
    return expect(score.validate()).rejects.not.toBe(null);
  });
  test('is not valid if a rating is not an integer', () => {
    var score = new Score({
      rating: 'Something',
      comment: 'Random comment',
    });
    return expect(score.validate()).rejects.not.toBe(null);
  });
  test('is not valid if a rating is negative', () => {
    var score = new Score({
      rating: -1,
      comment: 'Something',
    });
    return expect(score.validate()).rejects.not.toBe(null);
  });
  test('is not valid if a rating is greater than 10', () => {
    var score = new Score({
      rating: 15,
      comment: 'Something',
    });
    return expect(score.validate()).rejects.not.toBe(null);
  });
});
