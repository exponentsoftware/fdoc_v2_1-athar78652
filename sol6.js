function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfN = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    return sumOfN - actualSum;
  }
  
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  console.log(findMissingNumber(arr));
  