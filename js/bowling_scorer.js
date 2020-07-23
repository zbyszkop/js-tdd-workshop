class BowlingScorer {

    constructor() {
        this.currentScore = 0;
        this.throwCount = 0;
        this.frameScore = 0;
        this.isLastFrameSpare = false;
    }
    roll(pins) {
        if (this.throwCount % 2 === 0) {
            if(this.isLastFrameSpare) {
                this.currentScore += 10 + pins;
                this.isLastFrameSpare = false;
            }
            this.frameScore += pins;
        } else {
            if(this.frameScore + pins === 10){
                this.isLastFrameSpare = true;
            } else {
                this.currentScore += this.frameScore + pins;
            }
            this.frameScore = 0;
            
        }
        this.throwCount++;
    }

    score() {
        return this.currentScore;
    }
}

module.exports = BowlingScorer