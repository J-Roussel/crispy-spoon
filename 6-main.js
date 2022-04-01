const { slice } = require('./1-slice'); // 1
const { merge }= require('./2-merge'); //1
const { generateUnorderedArray } = require('./4-generate-unordered-array'); //1

function sort(array) {
  if (array.length <= 1) { // 2
    return array; //1
  }
  const middle = Math.floor(array.length / 2); //5
  const left = slice(array, 0, middle); // 4
  const right = slice(array, middle, array.length); //5
  return merge(sort(left), sort(right)); // 3
}

const array = generateUnorderedArray(10); //2
console.log(array); //1
console.log(sort(array)); //2


T = 1+1+1+2+1+5+4+5+3+2+1+2
T = 28
