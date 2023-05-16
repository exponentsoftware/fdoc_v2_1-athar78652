const array_1 = ["apple", "banana", "cherry", "date", "elderberry"];

const filterArray = [];
for (let i = 0; i < array_1.length; i++) {
  if (array_1[i].length >= 6) filterArray.push(array_1[i]);
}

console.log(filterArray)

