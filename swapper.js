// In this exercise, you will write a function that will swap values between two objects. Your function will receive four parameters.
//Your function should fetch the value stored in key1 in object1, and then store that value in key2 of object2. 
//Take the original value stored in key2 of object2, and store that in key1 of object1. 
//Do not return anything.

const swapper = function(key1, object1, key2, object2) {  //starter code, a function for key1, key2 and object1, object2.
  console.log('Swap!');  //starter code, logs Swap!
  
  let keyOneObject = object1[key1];  //stores value
  let keyTwoObject = object2[key2];  //stores value

  object1[key1] = keyTwoObject;  //swaps object1[key1] with keyTwoObject
  object2[key2] = keyOneObject;  //swaps object2[key2] with keyOneObject
  
  console.log('object1: ', object1); 
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });

/*Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 } */
