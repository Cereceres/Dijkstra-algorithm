const assert = require('assert');
const dijkstra = require('../index');
describe('test to algorithm', () => {
    it('should return a array', () => {
        const index = Math.ceil(Math.random() * 4);
        const res = dijkstra([
            Infinity, 2, Infinity, 4,
            Infinity, 6, 5, 4,
            7, 2, Infinity, 4,
            7, 5, 3, Infinity
        ], index);
        console.log('res ', res, index);
        assert(res[index] === 0);
    });

    it('should return a array', () => {
        const index = Math.ceil(Math.random() * 4);
        const res = dijkstra([
            Infinity, 1, Infinity, 1,
            Infinity, 1, 1, 1,
            1, 1, Infinity, 1,
            1, 1, 1, Infinity
        ], index);
        console.log('res ', res, index);
        assert(res[index] === 0);
    });

    it('should return a array', () => {
        const index = 1;
        const res = dijkstra([
            Infinity, 1, Infinity, 1,
            Infinity, 1, 1, 1,
            1, 1, Infinity, 1,
            1, 1, 1, Infinity
        ], index);
        console.log('res ', res, index);
        assert(res[index] === 0);
    });
});
