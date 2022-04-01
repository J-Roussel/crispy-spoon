function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0; //1
  let j = 0; //1
  while (i < array1.length && j < array2.length) { // 7 + N
    if (array1[i] < array2[j]) { //3N
      mergedArray.push(array1[i]); //3N
      i++;//1N
    } else {
      mergedArray.push(array2[j]); // 3N
      j++;//1N
    }
  }
  while (i < array1.length) {// N + 3
    mergedArray.push(array1[i]); //3N
    i++;//1N
  }
  while (j < array2.length) { //3 + N
    mergedArray.push(array2[j]); //3N
    j++;//1N
  }
  return mergedArray; //1
}

module.exports = { merge };//1

T = 1+1+1+7+N+3N+3N+N+N+3+3N+N+3+N+3N+N+1+1
T = 18 + 18N
