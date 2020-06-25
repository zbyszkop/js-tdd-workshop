class BowlingScorer {
    constructor() {
        this.currentScore = 0;
        this.rollCount = 0;
        this.previousRoll = 0;
    }
    roll(pins) {
        this.rollCount++;
        if (this.rollCount % 2 === 0) {
            this.currentScore += this.previousRoll + pins;
        } else {
            this.previousRoll = pins;
        }
    }

    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer