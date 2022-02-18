/* function sumToOne(n) {  // original sumToOne function
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumToOne(4)); */

function sumToOne(n) {  
  if (n === 1) {  //set 'n' === '1' because when 'n' is = to '1' we return the value 1
    return 1;  //returns 1
  }

  return n + sumToOne(n - 1);  //returns n + sumToOne(n - 1) as this returns all numbers summed - 1
}

console.log(sumToOne(4));  //logs 10 
