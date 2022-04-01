function arrayContain(array, number) { 
  for (let i = 0; i < array.length; i++) { // 5 + N
    if (array[i] === number) { // 3N
      return true; // N
    }
  }
  return false; // 1
}

module.exports = { arrayContain }; // 1
/*
Linéaire
T = O(n) = 5 + N + 3N + N+1+1
T = O(n) = 7 + 5N
*/
