vowelsCounter = function(string) {
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u' || string[i] === 'Y' || string[i] === 'y') {
      vowelCount += 1;
    }
  }

  return vowelCount;

  // Time Complexity = O(n)
  // Space Complexity = O(n)
}