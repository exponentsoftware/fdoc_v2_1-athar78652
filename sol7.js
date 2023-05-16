function findNthLargest(arr, n) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
  
    // Return the nth largest number
    return arr[n - 1];
  }
  
  const arr = [3, 1, 7, 4, 5];
  console.log(findNthLargest(arr, 3))
  