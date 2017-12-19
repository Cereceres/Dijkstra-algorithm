
module.exports = (graph = [], node = 0) => {
    if (!Array.isArray(graph)) return [];
    const marked = new Set();
    const nodes = Math.sqrt(graph.length);
    const path = new Array(nodes).fill(Infinity);
    let actualNode = node;
    let actualDistance = 0;
    marked.add(actualNode);
    path[actualNode] = actualDistance;
    while(marked.size < nodes) {
        for (let i = 0; i < nodes; i++) {
            if (marked.has(i)) continue;
            const distance = actualDistance + graph[actualNode + i];
            if (path[i] > distance) path[i] = distance;
        }
        marked.add(actualNode);
        let minPath = Infinity;
        let nodeWithMinDistance = undefined;
        path.forEach((distance, index) => {
            if (marked.has(index) || distance >= minPath) return;
            nodeWithMinDistance = nodeWithMinDistance || index;
            minPath = distance;
            nodeWithMinDistance = index;
        });
        actualNode = nodeWithMinDistance;
        actualDistance = minPath;
    }
    return path;
};
