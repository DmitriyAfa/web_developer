// Понимание
// Найти кратчайший  путь из точки А в точку В.

// Планирование
// 1.Создать очередь с именами проверяемых путей
// 2. Извлечь из очереди очередную точку
// 3. Проверить имеет ли точка путь к нужной точке
// 4a. Если да, то завершить
// 4b. Если нет, то добавить всех соседей этой точки в очередь
// 5. Цикл
// 6. Если очередь пуста, вернуть null.

// Декомпозиция
// Создаем объект, поля которого - это вершины. И каждое поле равняется массиву
// вершин к которым есть путь

let graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];
// создаем функцию которая принимает параметрами сам граф, начальную и конечную точки.

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length) {
    let current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return -1;
}
console.log(breadthSearch(graph, "a", "g"));
console.log(breadthSearch(graph, "a", "f"));
console.log(breadthSearch(graph, "c", "g"));
console.log(breadthSearch(graph, "a", "w"));
