class BowlingScorer {

    constructor() {
        this.currentScore = 0;
        this.throwCount = 0;
        this.frameScore = 0;
    }
    roll(pins) {
        if (this.throwCount % 2 === 0) {
            this.frameScore += pins;
        } else {
            this.currentScore += this.frameScore + pins;
            this.frameScore = 0;
        }
        this.throwCount++;
    }

    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer