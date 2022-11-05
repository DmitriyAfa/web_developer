let arr = [9, 7, 8, -9, -7, -8, 6, 4, 5, -6, -4, -5, 3, 1, 2, -3, -1, -2, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log(selectionSort(arr));
