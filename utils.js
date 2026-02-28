// modules
// file with functions/ modules
export function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


export function celciusToFahrenheit(celcius) {
    return ((celcius * 9) / 5) + 32;
}


// module.exports = {
//     generateRandomNumber,
//     celciusToFahrenheit,
// };


// module.exports = generateRandomNumber;//export single function
// export default generateRandomNumber; //since its exported, it can be imported in other files