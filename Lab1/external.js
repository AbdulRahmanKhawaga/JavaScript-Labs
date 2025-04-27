console.log("Number1:",number1); 
/*the result in the console is "undefined" because we are trying to access "number1" before intializing it with a value because of hoisting 
which makes the declaration of any variable declared with the "var" keyword at the top of the program before run-time without initializing it with a value*/
var number1 = 3;

var number2 = 2.9;
var number3 = 0xff;
var firstName = "AbdulRahman";
var middleName = "Mohamed";
var lastName = `Khawaga`;
let flag = true;
console.log("This is the External Javascript file")


// b- Create another internal script before external script in html
// and print the value of number1?
//Uncaught ReferenceError: number1 is not defined because we are trying to access it before it is defined.


// c- Now add another internal script after external.js script in 
// html file and print the same value?
// now it printes the correct value Number1: 3

// Create javascript external file name it “functionsScript.js” and 
// another
// external file name it “ConsumingScript.js”

// First file will contain all functions (all functions have an input and 
// return
// value) and the other js file will contain the calling of these functions







