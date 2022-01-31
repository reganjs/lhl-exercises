// Write a node program that takes in an unlimited number of command line arguments, iterates through each and prints out the sum of them.
// If any argument is not a whole number, skip it. 
// Support negative numbers.
// Output an error message if the argument does not include a number.
// Include at least two arguments

// a) Break down of problem:
// b) Needs to accept an unlimted number of command line arguments (a minimum of two).
// c) Print the sum of the numbers.
// d) Skip over non whole numbers (decimal etc) and exclude non-integers.
// e) Allow for negative numbers.
// f) Present an error message if the argument does not include a number.

const argumentArr = process.argv.slice(2); //.slice removes some of the initial elements

if (argumentArr.length < 2) { //.length < 2 allows us to request two or more arguments
  console.log("Please include at least two arguments"); //logs error message that we need to include at least two arguments
  return;
}

function isAnInteger(num) { //a function that returns a number if it is an integer
  return Number.isAnInteger(num); //returns a number
}

let sum = 0; //set sum to 0

for (let i = 0; i <argumentArr.length; i++) { //for loop to iterate through argumentArr, count i++
  let num = Number(argumentArr[i]);

  if (Number.isNaN(num)) { //if number is not a number
    console.log(`${argumentArr[i]} is not a number, please provide a number`); //log error message requesting a number
  } else if (isAnInteger(num)) { //if it is a number
    sum = num + sum; //sum  = the number + the sum
  }
}

console.log("sum --", sum); //consolelog



