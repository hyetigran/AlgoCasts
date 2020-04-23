// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //filter both strings of space and special chars
  // lower case both strings
  let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let strB = stringB.replace(/[^\w]/g, "").toLowerCase();

  // base case: if strings aren't same length, return false
  if (strA.length !== strB.length) {
    return false;
  }

  //create empty object
  let objA = {};
  // loop string A and add to object
  for (let char of strA) {
    objA[char] ? objA[char]++ : (objA[char] = 1);
  }

  console.log(objA);
  // convert string B to array
  let arrB = strB.split("");
  // loop over array
  for (let i = 0; i < arrB.length; i++) {
    // check if character is equal to zero
    if (objA[arrB[i]] == 0) {
      return false;
    }
    // if array A of el is a key in obj A AND if it doesn't equal zero
    if (objA[arrB[i]] && objA[arrB[i]] !== 0) {
      //decrement
      objA[arrB[i]]--;
    }
  }
  //if loop finishes without throwing and error, return true
  return true;
}

module.exports = anagrams;
