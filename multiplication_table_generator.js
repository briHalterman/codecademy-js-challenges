// 2. Print a table containing multiplication tables
//    Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
//    Can you create an efficient solution that you could easily expand should you need the 12 times table?

generateMultiplicationTable = function(n) {
  let multiplicationTable = []
  for (let i = 0; i <= n; i++) {
    let row = []

    for (let j = 0; j <= n; j++) {
      row.push(i * j);
    }

    multiplicationTable.push(row)
  }

  console.table(multiplicationTable);

  // Time Complexity: O(n^2)
  // Space Complexity: O(n)
}

