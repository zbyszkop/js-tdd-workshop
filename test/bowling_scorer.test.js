const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')
describe('Bowling scorer', () => {
    it('should score 0 in the beginning', () => {
        let bowlingScorer = new BowlingScorer();
        assert.equal(bowlingScorer.score(), 0);
    });
    it('should tally up points for the frame after the two rolls', () => {
        let bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(2); ///first frame ended
        assert.equal(bowlingScorer.score(), 5);
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 5);
        bowlingScorer.roll(2); //second frame
        assert.equal(bowlingScorer.score(), 11);
    });
    it('spare frame counts as 10 + next roll pins', () => {
	    let bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        bowlingScorer.roll(7); ///first frame ended
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 13);
    })
})