// a- try to console.log the values of value1,value2,value3 on 
// consumingScript.js file ??

// console.log(value1,value2,value3); 
//this will throw an error because local variables of a function can not be accessed outsie the funtion
//================================================================


/*Assignment1 b: Try to call the function before definition line?
it will work an print the values because functions declarations are hoisted
so we can call them before definition*/
console.log(printVariables(1, 2, 3));


// c- Call the function with 3 values then print the return
let nums = printVariables(5,10,15);
console.log(nums);
//================================================================

    
// d- Try to call the function with less than 3 parameters 
// printVariables(3,5) .
// Then solve the problem of undefined variables

console.log(printVariables(10,20));
//the output will return the thired element "undefined" [10, 20, undefined]
//to solve this problem I will ad a default values to the function definition in FunctionsScript.js file
//================================================================



// e- What if you call the function with too many parameters ? 
// (more than 3)
console.log(printVariables(10,20,30,40,50));
//it will only return the first three values and the others will be ignored

//================================================================
// f- Define var localVar=3; testingVar=5; inside the function’s 
// block Before calling the function try to console.log the values 
// localVar and testingVar.??

// console.log(localVar);    //this will return error because it is a local function variable
console.log(testingVar);  // this will work becuase it it is not declared by let a var and declared globally


// g- In step f , call the function and try to print localVar and 
// testingVar?
printVariables(1, 2, 3);
// console.log(localVar);    //this will return error because it is a local function variable
console.log(testingVar);  // this will work becuase it it is not declared by let a var and declared globally
//================================================================


//Assignment2
// a- What if you insert less than 2 inputs?
console.log(summation(12)); 
//it will return NaN

// solve this problem using ES6 feature(by adding default values)

//testing
console.log(summation("test",5));
console.log(summation(5, "test"));
console.log(summation(3, 5));