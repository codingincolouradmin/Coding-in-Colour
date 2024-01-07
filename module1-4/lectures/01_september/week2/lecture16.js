// "If statements" -> deciding what to do based on a condition 

// Section: If-Else

// The current theme could be one of: 'light', 'dark', 'red', 'monokai' 
// let currentTheme = 'red'; 

// Represent the action as a statement printed to the console
// Remember that the condition MUST evaluate to true or false
// if (currentTheme === 'dark') {
//     console.log("You are now in dark mode!");
// } else {
//     if (currentTheme === 'light') {
//         console.log("You are now in light mode!");
//     } else {
//         if (currentTheme === 'red') {
//             console.log("You are now in red mode!");
//         } else {
//             console.log("You are now in monokai mode!");
//         }
//     }
// }

// How can we do this better? "Clean code" <- fewest lines, easiest to read
// "else if"

// if (currentTheme === 'dark') {
//     console.log("You are now in dark mode!");
// } else if (currentTheme === 'light') {
//     console.log("You are now in light mode!");
// } else if (currentTheme === 'red') {
//     console.log("You are now in red mode!");
// } else if (currentTheme === 'monokai') {
//     console.log("You are now in monokai mode!");
// } else {
//     console.log("Not a valid theme!");
// }










// Section: Decisions that depend on other decisions!

// // Imagine you have a traffic light and you want your robot to respond according to the light! 

// let action; // "storing as a variable so we can use this later"

// // Simulate a traffic light
// let trafficLight = 'green'; 

// // Based on the action that was taken, the robot's status changes
// let roboStatus = 'on time'; 

// if (trafficLight === 'red') {
//     action = 'stop'; 
// } else if (trafficLight === 'yellow') {
//     action = 'slow down';
// } else if (trafficLight === 'green') {
//     action = 'go!'
// } 

// console.log(action);

// // If the robot stopped, he is running late. If not, he is on time. (he ran through the yellow)
// if (action === 'stop') {
//     roboStatus = 'late!'; 
// } 

// console.log(roboStatus); 










// Section: &&, ||, and ! within conditions
// Making a decision based on more than one condition at a time

// Group people based on age into one of 4 categories: Child, Teenager, Adult or Senior

// Simulate the age:
let age = 75;

if (age >= 0 && age < 13) {
    console.log('Child'); 
} else if (age >= 13 && age <= 19) {
    console.log('Teenager'); 
} else if (age >= 20 && age < 65) {
    console.log('Adult'); 
} else if (age >= 65) {
    console.log('Senior'); 
} else {
    console.log('Invalid age!'); 
}

// Rewrite where order matters 
if (age < 0) {
    console.log('Invalid age!');
} else if (age < 13) {
    console.log('Child'); 
} else if (age < 20) {
    console.log('Teenager'); 
} else if (age < 65) {
    console.log('Adult'); 
} else {
    console.log('Senior'); 
}