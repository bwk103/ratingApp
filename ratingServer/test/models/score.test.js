'use strict';
var Score = require('../../models/score');
var score;

describe('Score', () => {
  beforeEach(() => {
    score = new Score({
      rating: 5,
      comment: 'Random comment',
    });
  });
  test('is not valid if a rating is not provided', () => {
    score.rating = null;
    return expect(score.validate()).rejects.not.toBe(null);
  });
  test('is not valid if a rating is negative', () => {
    score.rating = -1;
    return expect(score.validate()).rejects.not.toBe(null);
  });
  test('is not valid if a rating is greater than 10', () => {
    score.rating = 15;
    return expect(score.validate()).rejects.not.toBe(null);
  });
});
