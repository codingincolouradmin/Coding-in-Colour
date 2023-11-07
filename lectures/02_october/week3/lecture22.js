/*
    * Introduction: Objects
    * We can think of key-value pairs as data elements that are related
    * For instance, key:value, or for instance, "type": "Dell", or "ram": 15
    * The idea is that they key is a string type, whereas the value is any data type (string, number, object, boolean)
*/

// The objects we create are composed of key-value pairs
let laptop = {
    type: "Dell",
    RAM: 16,
    Memory: 1000,
    weight: 3,
    owners: ["Aleem", "Josh", "Eric"]
}

// One thing to note is that even though the keys are strings, we don't need to explicitly use quotations!

// Square brackets notation to grab the memory
let memory = laptop["Memory"];

// Alternatively, we can store the 'key' we use in a variable and use that
let key = "Memory";
memory = laptop[key];

// Dot notation to grab the owners
let owners = laptop.owners;

// Let's use a variable to set the value associated with a key in Laptop
let newLaptop = false; // the laptop is not new
laptop["new?"] = newLaptop; // Creates a new key-value pair, sets the value associated with the key 'new?' to false

// Let's create some more objects, and then put these inside a backpack!

let waterBottle = {
    brand: "Fiji",
    cost: 100,
    weight: 2
}

let apple = {
    brand: "honeycrisp",
    weight: 1,
    colour: "red"
}

// Our first backpack
let firstBackpack = {
    item1: waterBottle,
    item2: apple,
    item3: laptop
}

// The above technically works, but perhaps we want all the items stored in a single thing (array), which makes more sense
let secondBackpack = {
    brand: "Gucci",
    items: [apple, waterBottle, laptop]
}

// But let's think for a minute. Maybe we want to include the weight of the backpack? The sum of the weights of all things inside of it

let sum = 0;
//  counter start 0 ; check if counter less than length of backpack items array ; update counter
for (let i = 0; i < secondBackpack.items.length; i = i + 1) {       // The reason we use '<' is because our array is zero-indexed, but the length is not 
                                                                    // the array ["apple", "orange"] has a length of 2, but we use indexes 0 and 1 to grab the items
    let myObject = secondBackpack.items[i]    // Here we grab the first item in our backpack.items array, which is an object
    let weight = myObject.weight;       // Here we grab the value of the weight attribute using dot notation
    sum = sum + weight;                 // We add the weight to our sum
}

secondBackpack["weight"] = sum;   // We will create a new key-value pair in the backpack to represent its weight (special backpack, it weights nothing itself)
delete secondBackpack.items;            // We will delete the items attribute (key-value pair) to make our new attribute 'weight' easier to see
console.log(secondBackpack);


/* 
    * I'm leaving this code commented out. Don't worry too much about it, but in essence, this just prints all key-value pairs in the String prototype object
    * The concept I want to get across is that Strings (and Arrays) can be thought of as objects
    * Every String (and Array) we create, gets access to a bunch of built-in methods that we access using the 'dot' operator
*/

// const stringPrototype = String.prototype;
// const methodNames = Object.getOwnPropertyNames(stringPrototype); // Get all method names on String.prototype

// methodNames.forEach((methodName) => {
//   const methodFunction = stringPrototype[methodName]; // Get the corresponding method function
//   if (typeof methodFunction === 'function') {       // Check if it's a function (to exclude non-function properties)
//     console.log(`${methodName}:`, methodFunction);
//   }
// });

