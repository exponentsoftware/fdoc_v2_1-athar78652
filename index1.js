function countOccurrences(arr, n, x) {
    let res = 0;
    for (let i = 0; i < n; i++) {
      if (x === arr[i]) res++;
    }
    return res;
  }
  
  const arr = [4, 2, 6, 8, 4, 1, 4];
  let n = arr.length;
  let x = 4;
  console.log(countOccurrences(arr, n, x));