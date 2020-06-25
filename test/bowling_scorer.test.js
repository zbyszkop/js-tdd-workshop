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
    it('should tally up points for the frame after the two rolls', () => {
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
        bowlingScorer.roll(3);
        bowlingScorer.roll(7); ///first frame ended
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 13);
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 19);
    });
    it('should tally up two spares in a row', () => {
        bowlingScorer.roll(3);
        bowlingScorer.roll(7); ///first frame ended
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 13);
        bowlingScorer.roll(7);
        assert.equal(bowlingScorer.score(), 13);
        bowlingScorer.roll(7);
        assert.equal(bowlingScorer.score(), 30);
    });
    it('should test complete game of spares', () => {
        for(let i=0; i<21; i++) {
            bowlingScorer.roll(5);
        }
        assert.equal(bowlingScorer.score(), 150);
    })
    it('should test spare of 4 rolls', () => {
        bowlingScorer.roll(4);
        bowlingScorer.roll(6);
        bowlingScorer.roll(6);
        bowlingScorer.roll(4);
        bowlingScorer.roll(5);

        assert.equal(bowlingScorer.score(), 31);
    })
})