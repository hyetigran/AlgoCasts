// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let arr = [...str.split("")];
  //   let reverseStr = [];
  //   for (let i = 0; i < str.length; i++) {
  //     reverseStr.push(arr.pop());
  //   }
  //   return reverseStr.join("");
  return str.split("").reduce((acc, cur) => cur + acc, "");
}

module.exports = reverse;
