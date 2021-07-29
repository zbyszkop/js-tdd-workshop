const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')
describe('Bowling scorer', () => {
    let bowlingScorer;

    beforeEach(() => {
        bowlingScorer = new BowlingScorer();
    })

    it('should score 0 in the beginning', () => {
        assert.equal(bowlingScorer.score(), 0);
    });

    it('should score 0 after the first roll in the frame', () => {
        bowlingScorer.roll(4)
        assert.equal(bowlingScorer.score(), 0);
    });

    it('should tally a score after a complete frame', () => {
        bowlingScorer.roll(4) // first frame, first roll
        bowlingScorer.roll(3) // first frame, second roll
        assert.equal(bowlingScorer.score(), 7);
        bowlingScorer.roll(8)    //second frame, first roll
        assert.equal(bowlingScorer.score(), 7);
        bowlingScorer.roll(1) //second frame, second roll
        assert.equal(bowlingScorer.score(), 7 + 8 + 1);

    });

    it('should score 0 after 2 rolls if a spare in the frame', () => {
        bowlingScorer.roll(4)
        bowlingScorer.roll(6)
        assert.equal(bowlingScorer.score(), 0);
    });
})