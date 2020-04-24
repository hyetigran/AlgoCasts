// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let maxCol = Math.floor((n + n - 1) / 2);

  for (let i = 0; i < n; i++) {
    // add to new string capilalized word
    console.log(
      " ".repeat(maxCol - i) + "#".repeat(i + 1) + " ".repeat(maxCol - i)
    );
  }
}

module.exports = pyramid;
