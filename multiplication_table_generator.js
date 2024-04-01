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

