removeSpaces = function(string) {
  let cleanString = ""

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      cleanString += string[i];
    }
  }

  return cleanString;

  // Time Complexity = O(n)
  // Space Complexity = O(n)
}
