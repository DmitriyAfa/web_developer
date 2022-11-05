let arr = [9, 7, 8, -9, -7, -8, 6, 4, 5, -6, -4, -5, 3, 1, 2, -3, -1, -2, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
