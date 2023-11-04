//SWITCHCASES
//If it is sunny you will go for picnic
//if it rains you will watch a movie at home
//If it snows you will pray it goes away
const prompt = require('prompt-sync')();

let weather = prompt("Is it sunny or snowy or rainy?");

switch(weather){
    case "sunny":
        console.log("you will go for picnic");
        break;
    case "snowy":
        console.log("you will pray it goes away");
        break;
    case "rainy":
        console.log("you will watch a movie at home");
        break;
    default:
        console.log("whatever you like");
        break;




}


// Ternary Operations
let a=3;
let b=9;

if(a>b)
{
    console.log("9 is greater than 3");
}
else
{
    console.log("wrong");
}

let result = (a>b)? "9 is greater than 3" : "wrong";
console.log(result);


