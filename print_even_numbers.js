printEvenNumbers = function(n) {
  let evenNumbers = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i)
    }
  }
  return evenNumbers;

  // Time Complexity = O(n)
  // Space Complexity = O(n)
}
