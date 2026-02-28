// modules
// file with functions/ modules

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

module.exports = generateRandomNumber; //since its exported, it can be imported in other files