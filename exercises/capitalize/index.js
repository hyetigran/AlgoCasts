// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // turn string into array
  let arr = str.split(" ");

  let result = "";
  //loop over array of strings
  for (let i = 0; i < arr.length; i++) {
    // add to new string capilalized word
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
  return result;
}

module.exports = capitalize;
