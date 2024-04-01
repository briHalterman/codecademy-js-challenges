calculateSum = function(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];  
  }

  return total;

  // Time Complexity = O(n);
  // Space Complexity = O(1);
}
