// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    let newNum = n.toString().split("").reverse();
    newNum.splice(newNum.length - 1, 1);
    newNum.unshift("-");
    let str = newNum.join("");
    return parseInt(str);
  }
  return n.toString().split("").reverse().join("");
}

module.exports = reverseInt;
