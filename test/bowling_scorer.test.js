const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')
describe('Bowling scorer', () => {
    it('should score 0 in the beginning', () => {
        const bowlingScorer = new BowlingScorer();
        assert.equal(bowlingScorer.score(), 0);
    });

    it('should tally up points only after a complete frame', () => {
        const bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 7);
    })
})