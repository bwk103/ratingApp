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
  test('is not valid if a rating is not provided', async() => {
    score.rating = null;
    await expect(score.validate()).rejects.not.toBeNull();
  });
  test('is not valid if a rating is negative', async() => {
    score.rating = -1;
    await expect(score.validate()).rejects.not.toBeNull();
  });
  test('is not valid if a rating is greater than 10', async() => {
    score.rating = 15;
    await expect(score.validate()).rejects.not.toBeNull();
  });
});
