/**
 * Leetcode
 *
 * Понимание
 *
 * Есть массив, к примеру let arr =  [1,2,1] или [0,1,2,2],
 * где  arr[end] - это тип фрутков, которое производит i дерево.
 *
 * Нужно собрать как можно больше фруктов следуя следющим ограничениям
 *
 * Есть только две корзины и каждая корзина может содержать
 * неограниченное количество фруктов только одного вида, в одной корзине только один вид фруктов.
 *
 * Начиная с любого дерева нужно собрать по одному фрукту, в одну из корзин, с каждого (включая стартовое), двигаясь вправо
 *
 * Как только доберетесь до дерева с фруктами, которые не помещаются в корзины вы должны остановиться
 *
 * Нужно найти окно в котором как можно больше поместится комбинация из двух цифр
 * Другими словами нужно найти наибольшую длину комбинации состоящей из двух цифр
 *
 * Скорее всего это задача на динамические окна
 */

let fruits = [1, 2, 3, 2, 2];
var totalFruit = function (fruits) {
  /**
   * Будем предполагать что тип 1 - это тип плода, который мы взяли с предыдущего дерева
   * fruits[i-1]
   */
  let type1 = fruits[0]; // Берём первый фрукт который является фруктом типа 1
  let type2; // Фрукт типа 2 не известен
  /**
   * В lenType1 будем считать сколько фруктов этого типа мы встречали, прежде чем
   * взять фрукт с текущего дерева i
   *
   * Например если значение этой переменной равно 2, это означает,
   * что и дерево [i-2] и дерево [i-1]  содержат плоды типа 1,
   * а дерево [i-3] содержит плоды типа 2
   */
  let lenType1 = 1;
  let maxLen = 1;
  let windowLen = 1;

  for (let end = 1; end < fruits.length; end++) {
    /**
     * Окно добралось до фрукта нового типа
     * Фрукт новго типа отличается от типа 1 и типа 2
     *
     * По условию это будет звучать так:
     * если фрукт по текущей итерации не равен первому и второму типу, а так же тип2 не равен -1.
     *
     * Вычислим максимальную длину сравнив длину текущего окна и максимальной длины
     *
     * Ообновим длину текущего окна путём присвоения значения длины типа1 фруктов + 1
     *  (+1 потому что текущее окно состоит из длины фруктов второго типа + 1 длина фрукта новго типа, этот фрукт arr[end])
     *
     * Затем сменить второй тип на первый, а первый тип на текущий тип ( новый)
     *
     * Длине типа1 присвоим единицу
     *
     * И продолжим со следующей итерации
     */
    if (fruits[end] !== type1 && fruits[end] !== type2 && type2 !== undefined) {
      maxLen = Math.max(maxLen, windowLen);
      windowLen = lenType1 + 1;
      type2 = type1;
      type1 = fruits[end];
      lenType1 = 1;
      continue;
    }
    /**
     * Если текущий фрукт равен фрукту типа 1 , то увеличим счётчик длины типа1 на 1
     */
    if (fruits[end] == type1) {
      lenType1++;
    } else {
      type2 = type1;
      type1 = fruits[end];
      lenType1 = 1;
    }
    /**
     * иначе, то есть фрукт равен типу 2
     *
     * поменяем местами тип2 на тип1
     *
     * тип1 на текущий фрукт
     * длине типп 2 присвоем значение 1
     */
    /**
     * В конце итерации увеличим счётчик длины текущего окна на 1
     */
    windowLen++;
  }
  /**
   * На выходе из функции вернем максимальное значение из максимальной длины и длины окна
   */
  return Math.max(maxLen, windowLen);
};

console.log(totalFruit(fruits));

// задачи leetcode sliding window https://leetcode.com/list/xlep8di5/
// Типы алгоритмических задач https://www.educative.io/courses/grokking-coding-interview-patterns-javascript
