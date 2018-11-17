const Pack = require('./index.js');
const Bottle = new Pack();

(async () => {
    try {
        await Bottle.openBottle().then(console.log);
        await Bottle.pourBottle().then(console.log);
        await Bottle.closeBottle().then(console.log);
        await Bottle.refillBottle().then(console.log);
        await Bottle.openBottle().then(console.log);
        await Bottle.drinkBottle().then(console.log);
    } catch (error) {
        console.log(error);
    }
})();