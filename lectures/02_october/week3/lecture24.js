//Storing Functions as Variables

const greet = function(name){
    console.log(`Hello ${name}`);
}

greet("John");

//Passing functions as parameters
  function calculate(operation, num1, num2) {  // the parameter operation gets replaced with add then then number entered
    return operation(num1, num2);              // are used by the add function
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  console.log(calculate(add, 5, 3));      // Output: 8
  console.log(calculate(subtract, 10, 4)); // Output: 6





//Return Functions from Functions


  function multiplier(y) {
    return function(x) {
      return x * y;  //9function(x) -> muliplier(y)-> double
    };
  }
  
  //const h = multiplier(2); // h = funtion(x) 
                           // h(5)

  
  console.log(h(5)); // Output: 10



  function m(k){
    
    return function(x){
        return x+k;
    }
  }

  const h = m(2);
  h(x);

  console.log(h(5));

