class GuessingGame {
    constructor() {
        this.range = {};
        this.result = 0;
    }

    setRange(min, max) {
        this.range = {
            min:min,
            max:max
        }
    }

    guess() {
        this.result = Math.round(this.range.min+(this.range.max-this.range.min)/2);
        return this.result;
    }

    lower() {
        this.range.max = this.result;
    }

    greater() {
        this.range.min = this.result;
    }
}

module.exports = GuessingGame;
