const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {}; // ни куда не ведет. Нет соседей.

function quickPath() {
  // code ...
}

console.log(quickPath(graph, "a"));
