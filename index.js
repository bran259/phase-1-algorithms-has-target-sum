function hasTargetSum(array, target) {
  // Write your algorithm here
  
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true; // found two numbers that add up to target
    }
    seenNumbers.add(num);
  }

  return false; // no pair found
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
function hasTargetSum(array, target):
  create a Set to store numbers we've seen
  for each number in array:
    complement = target - number
    if complement is already in the Set:
      return true
    else:
      add number to Set
  if loop ends, return false
*/

/*
  Add written explanation of your solution here
  Uses a Set for fast lookup (O(1) time).

Overall runtime: O(n), much faster than nested loops (O(n²)).

Handles negatives, duplicates, and edge cases.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
