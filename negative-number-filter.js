negativeNumberFilter = function(array) {
  let nonNegatives = [];

  for (let i = 0; i < array.length; i++) {
    
    if (array[i] % 2 == 0) {
      nonNegatives.push(array[i]);
    }
  }

  return nonNegatives;

  // Time Complexity = O(n)
  // Space Complexity = O(n)
}