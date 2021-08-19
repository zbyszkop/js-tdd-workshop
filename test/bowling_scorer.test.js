const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')
describe('Bowling scorer', () => {
    it('should score a regular frame', () => {
        let bowlingScorer = new BowlingScorer();
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(3)
        assert.strictEqual(bowlingScorer.score(), 7);
    });

    it('should score 2 frames', () => {
        let bowlingScorer = new BowlingScorer();
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)    // 1st roll, 1st frame
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(3)   // 2nd roll, 1st frame, tally
        assert.strictEqual(bowlingScorer.score(), 7);
        bowlingScorer.roll(2)  // 1st roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 7);
        bowlingScorer.roll(7)  // 2nd roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 16);
    });

    it('should score a spare', () => {
        let bowlingScorer = new BowlingScorer();
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)    // 1st roll, 1st frame
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(6)   // 2nd roll, 1st frame, tally
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(2)  // 1st roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 12);
        bowlingScorer.roll(7) // 2nd roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 21)
    });

    it('should score a spare and a regular frame after', () => {
        let bowlingScorer = new BowlingScorer();
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(4)    // 1st roll, 1st frame
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(6)   // 2nd roll, 1st frame, tally
        assert.strictEqual(bowlingScorer.score(), 0);
        bowlingScorer.roll(2)  // 1st roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 12);
        bowlingScorer.roll(7) // 2nd roll, 2nd frame
        assert.strictEqual(bowlingScorer.score(), 21)
        bowlingScorer.roll(2)  // 1st roll, 3rd frame
        assert.strictEqual(bowlingScorer.score(), 21);
        bowlingScorer.roll(7) // 2nd roll, 3rd frame
        assert.strictEqual(bowlingScorer.score(), 30)
    });

    
})
