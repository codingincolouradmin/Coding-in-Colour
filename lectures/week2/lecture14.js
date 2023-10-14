// PART1

// I'll study at the library if it's open and if I don't have any chores at home.  (statement)
// library open but you have chores at home (condition)

var library;
var open = true ;
var nochores = true


library = (open && !(nochores));   //-(-1)   !(true)  open and nochores = true
console.log(library);
 
// PART2

console.log(5>2);

//We go to picnic if section 1 has more students than section2 and section 4 has more than
//section3

let sec1 = 5;
let sec2 = 2;
let sec3 = 6;
let sec4 = 10;
let picnic = ((sec1 > sec2) && (sec3 < sec4));
console.log(picnic);

//(sec1 > sec2) -> (5>2)  -> (true)
//(sec3 < sec4) -> (6<10) -> (true)
//((sec1 > sec2) && (sec3 < sec4)) -> ((true) && (true)) -> true

console.log(2!==(12/3));
//!== means not equal to
//=== means equal to
// 2 can not be equal to (12/3)

console.log("apple" < "apple"); // a   b
console.log("apple" > "aardvark");

console.log(!(2!==(12/3)) || !(5>(16/4))); // || means or

// T or T = T
// T or F = T
// F or T = T
// F or F = F