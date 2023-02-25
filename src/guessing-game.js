class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
      }
    
      setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.answer = Math.round((this.max - this.min) / 2) + this.min;
        return this.answer;
    }

    lower() { this.max = this.answer; }

    greater() { this.min = this.answer; }
}

module.exports = GuessingGame;
