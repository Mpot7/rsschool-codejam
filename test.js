const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('Arrays', () => {
    it('Testing sumOfOther on array', () => {
      const sumOf = sumOfOther([2, 3, 4, 1]);	
      assert.deepEqual(sumOf, [8, 7, 6, 9]);
    });
    it('Testing sumOfOther on array', () => {
      const sumOf = sumOfOther([1, 5, 4, 7]);	
      assert.deepEqual(sumOf, [16, 12, 13, 10]);
    });
});