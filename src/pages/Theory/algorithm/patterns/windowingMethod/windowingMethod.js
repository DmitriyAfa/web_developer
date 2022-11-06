/**
 * Паттерны алгоритмов
 *
 * Метод скользящего окна - распространенная стратегия оптимизации алгоритма.
 *
 * Признаки для использования данного алгоритма:
 * Обычно есть неотсортированные массивы.
 * Задача заключается в поиске непрерывного подмассива, который соответствует
 * определенным кретериям.
 * Непрерывный означает что искомые элементы в подмассиве соприкасаются,
 * так мы не пропускаем ни одного числа в подмассиве чтобы получить ответ.
 *
 * Например:
 *  const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 * В этом массиве ['a', 'b', 'c'] является непрерывным подмассивом,
 * а ['b','d','e'] не является таковым, потому что 'b' не касается 'd' в array
 *
 *
 * Далее можно классифицировать скользящие окна как проблемы со статическими окнами
 * и как проблемы с динамическими окнами.
 *
 * В задачах со статическими окнами нам всегда нужно будет искать подмассив/подстроку
 * определенной длины, например: "найти максимальную сумму "k" смежных целых чисел
 * в массиве целых чисел". Здесь у нас будет окно размера k, которое останется размером k
 * на протяжении всей задачи.
 *
 */
let k = 5;
let array = [1, 5, 3, 6, 8, 3, 6, 8, 0, 3, 6];
/**
 * Метод скользящего окна заключается в том, что отслеживается
 * предыдущая сумма k элементов
 *
 * Создадим переменную куда будем передавать максимальную сумму
 * let maxSum = 0;
 * Переменную куда будем передавать сумму текущего окна
 * let windowSum = 0;
 * И стартовую точку для итерации по массиву
 * let start = 0;
 * Пройдёмся циклом for по длинне массива, инициализируем счётчик который будет использоваться в последующем в условии в качестве правого ограничителя для длинны окна (k)
 * (let end = 0; end < arr.length; end++)
 * Складываем в сумму текущего окна значение текущего элемента массива
 * windowSum += arr[end]
 * Задаём условие если счётчик цикла больше или равно k - 1. k - 1 так как end начинается с нуля. то есть если счётчик цикла равен заданному окну
 * if(end >= k-1)
 * тогда присвоем максимальной сумме сумму которая больше при сравнении максимальной суммы и суммы текущего окна
 * maxSum = Math.max(maxSum, widowSum);
 * Сдвигаем окно на шаг вправо, для этого вычитаем из суммы текущего окна значение первого элемента окна слева
 * windowSum -= arr[start]
 * Для следующей итерации сдвинем стартовую точку вправо
 * start++
 * На выходе из функции вернём максимальную сумму
 * return maxSum;
 */

function maxSubArrayOfsizeK(k, arr) {
  let maxSum = 0;
  let winodwSum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    winodwSum += arr[end];
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, winodwSum);
      winodwSum -= arr[start];
      start++;
    }
  }
  return maxSum;
}

console.log(maxSubArrayOfsizeK(k, array)); // ---> 31

/**
 * Динамические окна
 * Метод похож на два указателя, но вместо того, чтобы заботиться о каждом указателе,
 * мы заботимся обовсем между указателями.
 *
 * Пример, "найти длину наименьшего непрерывного подмассива с суммой, большей или равной заданному значению"
 *
 * В этом случае мы проверяем разную длину окна.
 * Нужно начав с первого элемента массива расширять окно, пока не достигнем суммы k.
 * Затем сжимаем окно, перемещая начало окна вперед. Как только значение опускается ниже сумыы, нам придется снова расширить
 * окно, переместив конец окна вперед.
 *
 */

/*
array: [1, 5, 3, 6, 8, 3]
sum: 10
We start by setting the window to be length 1, looking only at the first element.
  [*1, 5, 3, 6, 8, 3]
1 is less than the sum, so we expand the window until we are greater than or equal to the sum:
  [*1, *5, *3, *6, 8, 3] => length = 4, windowSum = 15
Now we shrink the window by moving the start and check if it's still greater than the sum
  [1, *5, *3, *6, 8, 3] => length = 3, windowSum = 14
We update our min length to be 3! 
  [1, 5, *3, *6, 8, 3] => windowSum = 9
Now the sum is too small, so we expand our window again
  [1, 5, *3, *6, *8, 3] => length = 3, windowSum = 17
We are big enough to shrink the window
  [1, 5, 3, *6, *8, 3] => length = 2, windowSum = 14
Update our min length to be 2! Shrink the window.
  [1, 5, 3, 6, *8, 3] => windowSum = 8
Too small, expand the window!
  [1, 5, 3, 6, *8, *3] => length = 2, windowSum = 11
We have reached the end of the array, and the smallest window we saw that was greater than the test sum was 2 elements in length.
 */
let sum = 10;
let arr2 = [1, 5, 3, 6, 8, 3];

function findMinLengthOfSumK(k, arr) {
  let minLength = Infinity;
  let windowSum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    if (windowSum >= k) {
      console.log(
        `При расширении окна вправо сумма была найдена start: ${arr[start]} end: ${arr[end]}`
      );
      minLength = Math.min(minLength, end - start + 1);
      console.log(
        `Расчёт минимума когда сумма при расширении была найдена ${minLength}`
      );
      while (windowSum >= k) {
        windowSum -= arr[start];
        if (windowSum >= k) {
          minLength = Math.min(minLength, end - start + 1);
          console.log(`Расчёт минимума при сужении ${minLength}`);
        }
        start++;
      }
      console.log(
        `После итерации на сужение окна вправо start: ${arr[start]} end: ${arr[end]}`
      );
    }
  }
  return minLength;
}

console.log(findMinLengthOfSumK(sum, arr2));
