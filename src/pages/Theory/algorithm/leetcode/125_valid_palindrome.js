/**
 * Сначала уберём все лишнее из строки
 *
 * Потом приведем к одному регистру
 *
 * Что бы понять палиндром или нет
 * поставим две точки на начало и на конец строки, на каждой итерации
 * будем сравнивать элементы и если они не равны друг другу, значит это не палиндром
 *
 * В конце цкла увеличим старт на 1 и уменьшим коничную на 1
 *
 * на выходе из функции вернем true
 */

let str = "A man, a plan, a canal -- Panama";
var isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }
  s = s
    .replace(/[^a-za-я0-9-zA-ZА-Яа-яЁё]/gi, "")
    .replace(/\s+/gi, ", ")
    .replace(/[{()}]/g, "")
    .replace(/-/g, "")
    .toLowerCase();

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};
console.log(
  str
    .replace(/[^a-za-я0-9-zA-ZА-Яа-яЁё]/gi, "")
    .replace(/\s+/gi, ", ")
    .replace(/[{()}]/g, "")
    .replace(/-/g, "")
);
