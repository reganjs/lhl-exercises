//The recursive case is when item is an array. We call the function again with that array.
//The base case is when the item is not an array. We just console log this. 

const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);

//the code below would be implemented if I wanted to solve the above problem using iteration instead of recursion 

/*const printItems = function(array) {
  while (array.length > 0) {
    const element = array.shift();
    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}*/

//explanation of what is occuring

/* printItems(["😎", ["💩", "🤗"], "😼", "😂"]) {

  // Item is not an array, so just log it
  console.log("😎")

  // Item is an array so call the function again
  printItems(["💩", "🤗"]) {

    // Item is not an array, so just log it
    console.log("💩")

    // Item is not an array, so just log it
    console.log("🤗")
  }

  // Item is not an array, so just log it
  console.log("😼")

  // Item is not an array, so just log it
  console.log("😂")
} */
