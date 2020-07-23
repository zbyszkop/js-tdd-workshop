const assert = require('assert');
const BowlingScorer = require('../js/bowling_scorer')

describe('Bowling scorer', () => {
    it('should score 0 in the beginning', () => {
        bowlingScorer = new BowlingScorer();
        assert.equal(bowlingScorer.score(), 0)
    });

    it('should tally up points only after a frame', () => {
        bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(2);
        assert.equal(bowlingScorer.score(), 0)
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 6)
    });

    it('should tally up points after each frame', () => {
        bowlingScorer = new BowlingScorer();
        score = 0;
        for (i = 0; i < 10; i++) {
            bowlingScorer.roll(2);
            assert.equal(bowlingScorer.score(), score)
            bowlingScorer.roll(4);
            score += 6;
            assert.equal(bowlingScorer.score(), score)
        }
		});
	
		it('should add previous frame score after spare', () => {
			bowlingScorer = new BowlingScorer();
			
			bowlingScorer.roll(5);
			bowlingScorer.roll(5);

			assert.equal(bowlingScorer.score(), 0)
			
			bowlingScorer.roll(3);
			assert.equal(bowlingScorer.score(), 13)
			
			bowlingScorer.roll(5);
			assert.equal(bowlingScorer.score(), 21)
	});
})