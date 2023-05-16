function findPairs(arr, target) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  
  const arr = [3, 4, 6, 8, 1, 2, 9];
  console.log(findPairs(arr, 10));
  