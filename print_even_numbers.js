// 1. Print all even numbers from 0 – 10
//    Try to make the solution to this problem as efficient as possible.
//    Consider using loops that would allow you to type the fewest    characters/commands.
//    Get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

printEvenNumbers = function(n) {
  let evenNumbers = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i)
    }
  }
  return evenNumbers;
}
