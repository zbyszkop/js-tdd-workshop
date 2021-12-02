class BowlingScorer {
    rollCount = 0;
    points = 0;
    tempPoints = 0;
    roll(pins) {
        this.rollCount++;
        if (this.tempPoints === 10){
            this.points = 10 + pins;    
        }
        this.tempPoints += pins;
        if((this.rollCount % 2 === 0) && this.tempPoints !== 10){
            this.points = this.tempPoints
        }

    }

    score() {
        return this.points;
    }
}

module.exports = BowlingScorer