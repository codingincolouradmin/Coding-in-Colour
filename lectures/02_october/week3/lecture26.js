/**
 * Lecture 26: Review and Extension of Functions
 * The following is a review of Lecture 26, including some explanations as well as the code we covered during the lecture.
 * For review on packages, please see the lecture recording
 */

/**
 * Introduction to Functions:
 * We can think of functions as a box, where we are only concerned with inputs and outputs. We input something, and get the output we want.
 * Now, with that as our starting point, fortunately in programming we get to decide what happens to the input in the box
 * What sorts of changes will occur to transform our input into the output we want
 * As best practice, I will include some examples below of functions with some comments that we can add describing our inputs and outputs
 * In the examples below, @param { number } a * specifies that the parametr we pass in 'a' is a number
 * In addition, @returns { number } specifies that the return type is a number
 */

/**
 * Calculate the square of a number.
 * 
 * @param {number} a - The number to be squared
 * @returns {number} - The square of the input number
 */
function squareNumber(a) {
    const result = a * a;
    return result;
}

/**
 * Concatenates the string "hello" to the input string.
 *
 * @param {string} s - The input string to which "hello" will be concatenated.
 * @returns {string} - The input string with "hello" appended to it.
 */
function addHello(s) {
    return "hello " + s;
}

/**
 * One point I should add is that calling this function by itself will not modify an existing string
 * let name = "John"
 * addHello(name)
 * console.log(name) => "John"
 * 
 * If I want to change the existing string, I need to re-assign the value
 * let name = "John"
 * name = addHello(name)
 * console.log(name) => "hello John"
 */


/**
 * Multiplies two numbers by repeatedly adding one of them a specified number of times.
 *
 * @param {number} a - The number of times we add 'b' repeatedly.
 * @param {number} b - The number to be added repeatedly.
 * @returns {number} - The result of multiplying 'a' by adding 'b' 'a' times.
 */
function multiplybyAdd(a, b) {
    let num = 0;
    for (let i = 1; i <= a; i++) {
        num = num + b;
    }
    return num;
}

// My goal in sharing the above is just to introduce a new way to adding comments that could be helpful
// We won't be penalizing students for not doing this, but it's just good practice and a good habit to build 


/**
 * Over the next little bit, we're going to look at the usefulness of storing functions as variables
 * Let's say I want to create a set of functions that can calculate the square of a number, a cub of a number, and so on,
 * without rewriting the same logic for each one. We can create what is called a "function factory" that generates these functions
 * (We looked at this in class as well, with multiplier)
 * 
 * As an aside, the Math.pow(base, power) is basically the same as base^power 
 * 
 */

/**
 * Factory function for creating power functions.
 *
 * @param {number} power - The exponent for the power function to be created.
 * @returns {function} - A new function that calculates the power of a number.
 *
 * @explanation
 * We've created a function, that receives a 'power' as input, and returns another function, we can look at
 * an example in detail
 */
function createPowerFunction(power) {
    // This inner function is returned by the factory
    return function (base) {
        return Math.pow(base, power);
    };
}

const square = createPowerFunction(2); 

/**
 * On line 94, I want to create a function that squares any input we pass into it, and store that function into the variable 'square'
 * What happens internally is the following
 * 
 * square = function createPowerFunction(2) {
 *     return function (base) {
 *       return Math.pow(base, 2)
 *   }
 * }
 * 
 * The function that we call, createPowerFunction(2), its return value is stored into square
 * And so square eventually equals
 * 
 * square = function (base) {
 *    return Math.pow(base, 2)
 * }
 * 
 * The utility of this is evident, in the fact that we can simply write one 'factory function', and that helps us write functions to 
 * calculate the square of a number, cube of a number, and so on
 * 
 */

console.log(square(10)); // This should return 100

/**
 * Now let's get into callbacks -> this is what happens when we pass functions as arguments into other functions!
 * Let's consider the example of a function that appliesDiscounts
 */


/**
 * Applies a discount to a given price using a provided discount function.
 *
 * @param {number} price - The original price before applying the discount.
 * @param {function} discountFunction - A function that calculates the discounted price.
 * @returns {number} - The discounted price.
 *
 * @explanation
 * We're passing in the discountFunction as a parameter into the appliesDiscount function!
 * 
 */
function appliesDiscount(price, discountFunction) {
    return discountFunction(price);
}

/**
 * Calculates the price after applying a flat 10% discount.
 *
 * @param {number} price - The original price before applying the discount.
 * @returns {number} - The discounted price after applying a 10% discount.
 *
*/
function flatDiscount(price) {
    return price * 0.90;
}

/**
 * Calculates the price after applying a seasonal discount.
 *
 * @param {number} price - The original price before applying the discount.
 * @returns {number} - The discounted price after applying a seasonal discount.
 *
*/
function seasonalDiscount(price) {
    return price * 0.75;
}

// We would call this in the following way
let oldPrice = 100
let newPrice = appliesDiscount(oldPrice, flatDiscount);
console.log(`Based on the flat discount, our price changes from $${oldPrice} to $${newPrice}`);
newPrice = appliesDiscount(oldPrice, seasonalDiscount);
console.log(`Based on the seasonal discount, our price changes from $${oldPrice} to $${newPrice}`);


/**
 * Now let's move onto Array callbacks. There are some powerful built-in methods that comes with arrays, that let us do some interesting things
 * Today we'll be covering (1) forEach, (2) map, and (3) filter
 */

// For each of these, we'll use an example of a toy box
let toys = ["ball", "balloon", "toy sword", "lego"]

/**
 * Let's start with a use case for using forEach
 * what forEach does, is it executes a callback function we pass into it, for each element of the array
 * We get access to 3 variables in this callback (this is handled internally), the value of that element itself, the index at where its located,
 * and the array itself (let's only worry about the first two for now)
 */

toys.forEach(function (value, index) {
    console.log(`We can find ${value} at index ${index}`)
})

// Also keep in mind that forEach(...) does not return anything itself
// Alternatively we can write the callback function separately and add it inside 

console.log(); // Add a space
function ourCallback(value, index) {
    console.log(`We can find ${value} at index ${index}`)
}

toys.forEach(ourCallback); // This also works

/**
 * Let's move onto a use case for map
 * what map does, is it executes a callback function we pass into it, for each element of the array
 * We get access to 3 variables in this callback (this is handled internally), the value of that element itself, the index at where its located,
 * and the array itself (let's only worry about the first two for now)
 * 
 * One significant difference here, is that map itself returns the new array 
 * 
 */

// In this example, what I'm doing is the following...for each element in toys, I will execute a callback function, where I...
// paint only the ball and the balloon...
// and set that new array as the value of the newToys variable

let newToys  = toys.map(function(value) {
    if (value == "ball" || value == "balloon") {
        return "red " + value
    } else {
        return value;
    }
})

console.log("Our old toys are ", toys);
console.log("Our new toys are ", newToys);

/**
 * Let's move onto a usecase for filter()
 * This is very similar to map
 * what filter does, is it executes a callback function we pass into it, for each element of the array
 * We get access to 3 variables in this callback (this is handled internally), the value of that element itself, the index at where its located,
 * and the array itself (let's only worry about the first two for now)
 * 
 * The difference here is that we want filter to return true or false
 * If it returns true when we call it on that element, that element is included in the new array we return
 * If it returns false, that element is not included
 * 
 */

// In this example, I only want toys left that are red (filter out all others!)

let redToys = newToys.filter(function(value) {
    if (value.includes("red")) {
        return true;
    } else {
        return false;
    }
})

console.log("Our red toys are ", redToys);

/**
 * I hope this helped. There are plenty of more interesting things we can do with everything provided!
 * Have fun in this file!
 */