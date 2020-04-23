// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //   const chunked = [];
  //   let index = 0;
  //   while (index < array.length) {
  //     chunked.push(array.slice(index, index + size));
  //     index += size;
  //   }
  //   return chunked;

  let result = [];
  let filler = [];
  if (array.length < size) {
    result.push(array);
    return result;
  }
  for (let i = 0; i < array.length; i++) {
    if (filler.length == size) {
      result.push(filler);
      filler = [];
    }
    filler.push(array[i]);
  }
  if (filler.length) {
    result.push(filler);
  }
  return result;
}

module.exports = chunk;
