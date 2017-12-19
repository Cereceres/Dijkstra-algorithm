# Dijkstra-algorithm
Dijkstra algorithm to get path in graph


# Test

```bash
npm test
```

# API

## Dijkstra(graph, index) -> array


# usage

```js
const dijkstra = require('Dijkstra-algorithm');
const index = 1;
const res = dijkstra([
    Infinity, 1, Infinity, 1,
    Infinity, 1, 1, 1,
    1, 1, Infinity, 1,
    1, 1, 1, Infinity
], index);
assert(res[index] === 0);
assert.deepEqual(res, [ 1, 0, 1, 2 ]);
```