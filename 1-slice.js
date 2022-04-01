function slice(array, start, end) {
  let slicedArray = [];  //1
  for (let i = start; i < end; i++) { // N + 6
    slicedArray.push(array[i]); // 3N
  }
  return slicedArray; // 1
}

module.exports = { slice }; // 1

/* Linéaire donc :
T = O(n) = 1 + N + 6 + 3N + 1 + 1 = 4N + 9
*/


