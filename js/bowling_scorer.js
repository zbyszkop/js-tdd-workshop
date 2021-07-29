class BowlingScorer {

    constructor() {
        this.isFirstRoll = true;
        this.lastPins = 0;
        this.tally = 0;

    }

    roll(pins) {
        if (!this.isFirstRoll) {
            if (this.lastPins + pins !== 10) {
                this.tally += this.lastPins + pins;
            }
        }
        this.isFirstRoll = !this.isFirstRoll;
        this.lastPins = pins;
    }

    score() {
        return this.tally;
    }
}

module.exports = BowlingScorer

