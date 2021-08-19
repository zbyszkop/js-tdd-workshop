class BowlingScorer {
    constructor() {
        this.isFirstRoll = true;
        this.lastRoll = 0;
        this.currentScore = 0;
        this.spare = false;
    }

    roll(pins) {
        if (this.isFirstRoll) {
            if(this.spare){
                this.currentScore+=10+pins
                this.spare=false
            }
                
            this.lastRoll = pins;
            this.isFirstRoll = false;
        } else {
            if(this.lastRoll+pins!=10)
                this.currentScore += this.lastRoll + pins;
            else
                this.spare=true
            this.isFirstRoll = true;

        }
    }

    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer

