const isPrime = (num) => {
    let x = Math.floor(Math.sqrt(num));
    let j = x;
    while (j >= 2) {
       if (num % j === 0) {
          return false;
       }
       j--
    }
    return true;
  };
  const sumOfPrimes = (num = 10) => {
    let iter = num;
    let sum = 0;
    while (iter >= 2) {
       if (isPrime(iter) === true) {
          sum += iter;
       }
       iter--
    }
    return sum;
  };
  console.log(sumOfPrimes(10));