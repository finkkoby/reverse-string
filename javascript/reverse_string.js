function reverseString(string) {
  let newStr = ""
  for(let char of string) {
    newStr = char + newStr;
  }
  return newStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// In my reverseString function, I passed it the string that I want it to reverse as a parameter. I started the function by creating a new string that would hold my reversed string. Then I did a for..of loop that will iterate over each character in the string. Each iteration will take the character that was passed in, and add it to the beginning of the newStr variable I declared first. The function then returns the newStr variable that contains our reversed string.
