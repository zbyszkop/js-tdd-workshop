class BowlingScorer {
    constructor() {
        this.isFirstRoll = true;
        this.lastRoll = 0;
        this.currentScore = 0;
    }

    roll(pins) {
        if (this.isFirstRoll) {
            this.lastRoll = pins;
            this.isFirstRoll = false;
        } else {
            this.currentScore += this.lastRoll + pins;
            this.isFirstRoll = true;
        }
    }

    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer

