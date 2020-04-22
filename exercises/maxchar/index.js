// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let arr = str.split("");

  let obj = arr.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] += 1;
    else acc[cur] = 1;
    return acc;
  }, {});

  let maxCh = ["", 0];
  for (let property in obj) {
    if (obj[property] > maxCh[1]) {
      maxCh[0] = property;
      maxCh[1] = obj[property];
    }
  }
  return maxCh[0];
}

module.exports = maxChar;
