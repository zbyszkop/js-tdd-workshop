class BowlingScorer {

    constructor() {
        this.isFirstRoll = true;
        this.lastPins = 0;
        this.tally = 0;
        this.lastSpare = false;
        this.lastStrike = false
        this.twoPinsAgo = 0;
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
            this.lastSpare = false;
        } else if (pins === 10) {
          // strike
          this.isFirstRoll = true;
          this.lastPins = pins;
          this.lastStrike = true
          // TODO
          return
        }
        this.isFirstRoll = !this.isFirstRoll;
        this.lastPins = pins;
    }

    score() {
        return this.tally;
    }
}

module.exports = BowlingScorer
