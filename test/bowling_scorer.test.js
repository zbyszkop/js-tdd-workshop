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

    it('should only count score after a complete frame', () => {
        const bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        bowlingScorer.roll(4);
        bowlingScorer.roll(5);
        assert.equal(bowlingScorer.score(), 7);
    })

    it('should correctly tally up 2 consecutive frames', () => {
        const bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        bowlingScorer.roll(4);
        bowlingScorer.roll(5);
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 16);
    })

    it('should correctly tally up a spare', () => {
        const bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(7);
        assert.equal(bowlingScorer.score(), 0);
        // Second frame
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 14);
        bowlingScorer.roll(2);
        assert.equal(bowlingScorer.score(), 20);
    })

    it('should correctly tally up 2 consecutive spares', () => {
        const bowlingScorer = new BowlingScorer();
        bowlingScorer.roll(3);
        assert.equal(bowlingScorer.score(), 0);
        bowlingScorer.roll(7);
        assert.equal(bowlingScorer.score(), 0);
        // Second frame
        bowlingScorer.roll(4);
        assert.equal(bowlingScorer.score(), 14);
        bowlingScorer.roll(6);
        assert.equal(bowlingScorer.score(), 14);
        // third frame
        bowlingScorer.roll(2);
        assert.equal(bowlingScorer.score(), 26);
        bowlingScorer.roll(6);
        assert.equal(bowlingScorer.score(), 34);

    })
    })