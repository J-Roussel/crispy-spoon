function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //5 +N 
    if (array[i] === number) { //3
      return true; // N
    }
  }
  return false; // N
}

module.exports = { arrayContain }; //N

/*
LINEAIRE
T = O(n) = 5+N+3+N+N+N 
T = O(n) = 7 + 4N
*/
