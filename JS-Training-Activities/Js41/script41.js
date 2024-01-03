function findSmallestInt(arr) {
    return arr.sort((a, b) => a - b)[0];
  }

module.exports = findSmallestInt;