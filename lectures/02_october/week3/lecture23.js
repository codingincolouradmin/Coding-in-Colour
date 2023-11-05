// let x = 2;
// function change(y) {
//   y.key = 1;
//   return;
// }
// change(x);
// console.log(x);

// // --------------------------------

// var a = { key: "value" };
// function update( ref) {
//   ref.key = "newvalue"; // this code _does_ affect the _contents_ of the object
// }
// update(a);
// console.log(a);

// function multiply(x) {
//   return x[0] * x[1];
// }
// let z = [2, 3];
// console.log(multiply(z));

// function concatString(x, y) {
//   return x.concat(" ", y);
// }

// console.log(concatString("Hello", "World"));

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(celsiusToFahrenheit(20));

// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(2, 10));

// function divideByTwo(a) {
//   let b = 2;
//   return a / b;
// }
// console.log(divideByTwo(2));

// Helper function to calculate the area of the living room
// function calculateArea(length, width) {
//   return length * width;
// }

// // Helper function to determine the number of tiles required
// function tilesRequired(area, tileArea) {
//   return Math.ceil(area / tileArea); // Round to the ceiling integer
// }

// // Main function to calculate the total cost of tiles
// function totalTileCost(length, width, tileCost, tileArea) {
//   const area = calculateArea(length, width);
//   const tilesNeeded = tilesRequired(area, tileArea);
//   return tilesNeeded * tileCost;
// }
// console.log(totalTileCost(16, 13, 100, 3));

// let x = isNan(123);

// console.log(x);

// const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "fox";

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" :  ? "":  "is not"
//   } in the sentence`
// );
// // Expected output: "The word "fox" is in the sentence"

// function countDown(fromNumber) {
//   console.log(fromNumber);
//   countDown(fromNumber - 1);
// }

// countDown(3);
