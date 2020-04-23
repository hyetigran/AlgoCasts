// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let result = "";
  //loop over array of strings
  for (let i = 1; i < n + 1; i++) {
    // add to new string capilalized word
    result += "\n" + "#".repeat(i) + " ".repeat(n - i);
  }
  return result;
}

module.exports = steps;
