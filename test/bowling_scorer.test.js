const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')
describe('Bowling scorer', () => {
    it('should score a regular frame', () => {
        let bowlingScorer = new BowlingScorer();
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(3)
        assert.equal(bowlingScorer.score(), 7);
    });

    it('should score 2 frames', () => {
        let bowlingScorer = new BowlingScorer();
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)    // 1st roll, 1st frame
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(3)   // 2nd roll, 1st frame, tally
        assert.equal(bowlingScorer.score(), 7);
        bowlingScorer.roll(2)  // 1st roll, 2nd frame
        assert.equal(bowlingScorer.score(), 7);

    });
})
