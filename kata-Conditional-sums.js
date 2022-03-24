const conditionalSum = function(values, condition) {
    
  const even = [];
  const odd = [];

  // Separate odds from evens into their own arrays
  if (values && values.length) {
      for (let i = 0; i < values.length; i++) {
          if (values[i] % 2 === 0) {
              even.push(values[i]);
              } else { 
              odd.push(values[i]);
              }
          }
      // If there are no values, return 0
      } else return 0
  
  // Send the requested array to the sumTheNumbers function
  if (condition === 'even') {
      return sumTheNumbers(even);
  } else if (condition === 'odd') {
      return sumTheNumbers(odd);
  // If there is no condition, or the condition is invalid, say so
  } else return 'Condition invalid or not specified. Try again!'  

};

// Receive the array and return its sum
const sumTheNumbers = function(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
          sum = sum + array[i];
      }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([2, 7, 14, 28, 42, 91], "ketchup"));