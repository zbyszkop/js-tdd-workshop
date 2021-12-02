class BowlingScorer {
    rollCount = 0;
    points = 0;
    tempPoints = 0;
    roll(pins) {
        this.rollCount++;
        this.tempPoints += pins;
        if(this.rollCount === 2){
            this.points = this.tempPoints
        }

    }

    score() {
        if(this.rollCount === 2){
            this.rollCount = 0;
        }
        return this.points;
    }
}

module.exports = BowlingScorer