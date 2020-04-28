// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = arr[j];
      }
    }
    if (min !== i) {
      let lesser = arr[min];
      arr[min] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr > 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let left = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const results = [];
  let counterLeft = 0;
  let counterRight = 0;
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...rigth];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
