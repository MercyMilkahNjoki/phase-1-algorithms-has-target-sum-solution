function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array){
    //n steps
     const complement = target - number;
  if (complement in seenNumbers) return true; // 1 step per iteration
   seenNumbers[number] = true;
 }
return false;

}


/* BigO for final soln
runtime: O(n)
space: O(n)
*/

/*prevoius BigO
  runtime: O(n*n) //nesting ..as input gets bigger, runtime gets worse...by adding every element also makes it inefficient
  space :O(n) // ..linear growth..no auxiliary data structures .. as the size of the array grows, so does our memory needs, in propotion 
*/

/* 
    Add written explanation of your solution here
  hasTargetSum([1, 2, 3, 4], 6))
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }

  create an object to keep track of numbers we've already seen 
   iterate through each number in the array 
    for the current num, identify complement that adds to the target(com = target - num)
     check if any key on our object is a complement
      if so return true
       otherwise, add that number to the object
      
      if i reach at the end of the array, return false
 
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
