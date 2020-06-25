class BowlingScorer {
    constructor() {
        this.currentScore = 0;
        this.rollCount = 0;
        this.previousRoll = 0;
        this.strikePoints = 10;
        this.previousFrameWasSpare = false;
        this.isStrike = false;
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

        if ( this.rollCount % 2 != 0 && pins==10) {
            this.rollCount++;
            this.isStrike = true;
            this.previousRoll = pins;
        }
        
        if ( this.isEndOfFrame() ) {
            if ( this.isStrike && this.previousRoll === 10 ) {
                return;             
            } else if ( this.isStrike && this.previousRoll != 10 ) {
                this.currentScore += 2*(this.previousRoll + pins) + this.strikePoints;
                this.isStrike = false;  
            } else if ( pins + this.previousRoll < 10 ) {
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