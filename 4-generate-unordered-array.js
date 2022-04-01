const { arrayContain } = require('./3-array-contain'); // 1

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5 + N
    let number = Math.floor(Math.random() * 100);//5N
    while (arrayContain(array, number)) {//1 + N
      number = Math.floor(Math.random() * 100);//5N
    }
    array.push(number);//3N
  }
  return array;//1
}

module.exports = { generateUnorderedArray };//1

/*
Quadratique
T = O(n*n) = 1+1+5+N+5N+1+N+5N+3N+1+1
T = O(n*n) = 10 + 15N
*/
