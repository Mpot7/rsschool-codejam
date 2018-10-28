const assert = require("assert");
Object.freeze(assert);
const sumOfOther = require("./src/sumOfOther");
const recursion = require("./src/recursion");

describe("sumOfOther", () => {
  it("Testing sumOfOther on array 1", () => {
    const sumOf = sumOfOther([2, 3, 4, 1]);	
    assert.deepEqual(sumOf, [8, 7, 6, 9]);
  });
  it("Testing sumOfOther on array 2", () => {
    const sumOf = sumOfOther([1, 5, 4, 7]);	
    assert.deepEqual(sumOf, [16, 12, 13, 10]);
  });
});

describe("Recursion", () => {
  it("Testing recursion on tree 1", () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,110,130]]);
  });
  it("Testing recursion on tree 2", () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":109}}};
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,109]]);
  });
});