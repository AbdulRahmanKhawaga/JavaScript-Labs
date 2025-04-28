// Assignment 1: testing hoisting and function’s call
// 1- Create function name it printVariables(value1,value2,value3) (as 
// function declaration) takes 3 parameters and return them as an Array

/*Assignment1 b: Try to call the function before definition line?: it will work an print the values because functions declarations are hoisted
so we can call them before definition*/
console.log(printVariables(1, 2, 3));
//=============================================================================

function printVariables(value1=0, value2=0, value3=0) {
    //2e: printing the arguments
    for (let i = 0; i < arguments.length; i++) {
        console.log('argument', i+1, ':', arguments[i]);
    }
    
    // f- Define var localVar=3; testingVar=5;
    var localVar = 3;
    testingVar = 5; 

    return [value1, value2, value3];
}


// 2- Repeat step 1 but define the function as function expression
// const printVariables = function(value1 = 0, value2 = 0, value3 = 0) {
//     var localVar = 3;
//     testingVar = 5;
//     console.log(arguments);
//     return [value1, value2, value3];
// };

/*all steps are the same except step b (calling before definition) it won't work because that
function expressions are not hoisted*/


// Assignment 2: create the following functions:
// 4- Functions accept 2 variables and return the summation result 
// b- What if the input is not a Number?
// Solve this problem using your logic
function summation(num1=0,num2=0){
    if (!isFinite(num1)) {
        console.log(`Warning: num1 "${num1}" is invalid and will be set to 0`);
        num1 = 0;
    }
    if (!isFinite(num2)) {
        console.log(`Warning: num2 "${num2}" is invalid and will be set to 0`);
        num2 = 0;
    }
    return num1+num2;
}