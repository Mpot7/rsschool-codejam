module.exports = function make(...args) {
  const arr = [];
  function make1(...args1) {
    if (typeof args1[0] === "function") {
      return arr.reduce(args1[0]);
    }
    else {
      arr.push(...args1);
      return make1;
    }
  }
  return make1(...args);
};