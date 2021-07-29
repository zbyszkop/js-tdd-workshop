class BowlingScorer {

    constructor() {
        this.isFirstRoll = true;
        this.lastPins = 0;
        this.tally = 0;
        this.lastSpare = false;
    }

    roll(pins) {
        if (!this.isFirstRoll) {
            if (this.lastPins + pins !== 10) {
                this.tally += this.lastPins + pins;
            } else {
                this.lastSpare = true;
            }
        } else if (this.lastSpare) {
            this.tally += pins + 10;
        }
        this.isFirstRoll = !this.isFirstRoll;
        this.lastPins = pins;
    }

    score() {
        return this.tally;
    }
}

module.exports = BowlingScorer

