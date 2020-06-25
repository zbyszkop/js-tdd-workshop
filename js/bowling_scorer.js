class BowlingScorer {
    constructor() {
        this.currentScore = 0;
        this.rollCount = 0;
        this.previousRoll = 0;
        this.previousFrameWasSpare = false;
    }

	isEndOfFrame() {
		return this.rollCount % 2 === 0;
	}
	
    roll(pins) {
        this.rollCount++;
        if ( this.previousFrameWasSpare ) {
	        this.currentScore += pins + 10;
	        this.previousFrameWasSpare = false;
        }
        if ( this.isEndOfFrame() ) {
            if ( pins + this.previousRoll < 10 ) {
	            this.currentScore += this.previousRoll + pins;
            } else {
                this.previousFrameWasSpare = true;
            }
        } else {
            this.previousRoll = pins;
        }
    }


    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer