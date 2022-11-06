const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      return middle;
    }
    if (arr[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, 15));
console.log(binarySearch(arr, 0));

console.log(binarySearch(arr, 11));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 16));
