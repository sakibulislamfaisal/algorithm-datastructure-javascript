function fibonacciNumber(num) {
  var fibo = [0, 1];
  if (num <= 2) return 1;
  else {
    for (var i = 2; i <= num; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo[num];
}

const result = fibonacciNumber(6);
console.log("Fibonacci Number is  : ", result);
