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

    it('should tally the score after 3 rolls if a spare in the frame', () => {
        bowlingScorer.roll(4)
        bowlingScorer.roll(6)
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(7);
        assert.equal(bowlingScorer.score(), 10 + 7);
        bowlingScorer.roll(2);
        assert.equal(bowlingScorer.score(), 10 + 7 + 9);
    });

    it('should tally the score after 5 rolls after two spare frames', () => {
        bowlingScorer.roll(4)
        bowlingScorer.roll(6)
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(5)
        assert.equal(bowlingScorer.score(), 10 + 5);
        bowlingScorer.roll(5)
        assert.equal(bowlingScorer.score(), 10 + 5);
    });

    it('should correctly tally one spare frame with non spare frames', () => {
        bowlingScorer.roll(4)
        bowlingScorer.roll(6)
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(5)
        assert.equal(bowlingScorer.score(), 10 + 5);
        bowlingScorer.roll(4)
        assert.equal(bowlingScorer.score(), 15 + 5 + 4);
        bowlingScorer.roll(2)
        assert.equal(bowlingScorer.score(), 24);
        bowlingScorer.roll(3)
        assert.equal(bowlingScorer.score(), 29);
    });

    it('should correctly handle strikes', () => {
        // first frame is strike
        bowlingScorer.roll(10)
        assert.equal(bowlingScorer.score(), 0);

        // second frame first roll
        bowlingScorer.roll(2)
        assert.equal(bowlingScorer.score(), 0);

        // second frame second roll
        bowlingScorer.roll(3)

        const secondFrameRawScore = 2 + 3
        const strikeFrameScore = 10 + 2 + 3
        assert.equal(bowlingScorer.score(), strikeFrameScore + secondFrameRawScore);
    });
})
