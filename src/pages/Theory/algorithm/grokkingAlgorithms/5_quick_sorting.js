let arr = [9, 7, 8, -9, -7, -8, 6, 4, 5, -6, -4, -5, 3, 1, 2, -3, -1, -2, 0];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
