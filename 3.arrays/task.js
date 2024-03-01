function compareArrays(arr1, arr2) {
  if (arr1.lenght !== arr2.lenght) {
    return false;
  }
  return arr1.every((value, index) => {
    console.log(value, arr2[index]);
    return value === arr2[index];
  });
}
console.log(compareArrays([8, 9], [6, 7])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
