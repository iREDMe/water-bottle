/**
 * The water bottle.
 */
class WaterBottle {
    constructor() {
        this.opened = false;
        this.filled = true;
    }

    /**
     * Open the bottle in 1 second.
     * @returns {Promise<string>}
     */
    openBottle() {
        return new Promise((resolve, reject) => {
            if (this.opened) {
                reject('Bottle already open.');
            } else {
                setTimeout(() => {
                    this.opened = true;
                    resolve('Successfully opened the bottle.')
                }, 1000);
            }
        });
    }

    /**
     * Close the bottle in 1 second.
     * @returns {Promise<string>}
     */
    closeBottle() {
        return new Promise((resolve, reject) => {
            if (!this.opened) {
                reject('Bottle already closed.');
            } else {
                setTimeout(() => {
                    this.opened = false;
                    resolve('Successfully closed the bottle.')
                }, 1000);
            }
        });
    }

    /**
     * Drink bottle in 5 seconds.
     * @returns {Promise<string>}
     */
    drinkBottle() {
        return new Promise((resolve, reject) => {
            if (!this.filled) {
                reject('Bottle is empty');
            } else if (!this.opened) {
                reject('Bottle not opened.');
            } else {
                setTimeout(() => {
                    this.filled = false;
                    resolve('Successfully drank the water.');
                }, 5000);
            }
        });
    }

    /**
     * Pour bottle in 3 seconds.
     * @returns {Promise<string>}
     */
    pourBottle() {
        return new Promise((resolve, reject) => {
            if (!this.filled) {
                reject('Bottle is empty');
            } else if (!this.opened) {
                reject('Bottle not opened.');
            } else {
                setTimeout(() => {
                    this.filled = false;
                    resolve('Successfully poured out the water.');
                }, 3000);
            }
        });
    }

    /**
     * Refill bottle in 3 seconds.
     * @returns {Promise<string>}
     */
    refillBottle() {
        return new Promise((resolve, reject) => {
            if (this.filled) {
                reject('Already Filled');
            } else if (!this.opened) {
                reject('Bottle not opened.');
            } else {
                setTimeout(() => {
                    this.filled = true;
                    resolve('Successfully refilled the bottle.')
                }, 3000)
            }
        });
    }
}

module.exports = WaterBottle;