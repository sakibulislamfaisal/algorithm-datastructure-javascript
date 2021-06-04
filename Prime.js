function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return "It is not prime number";
    }
  }
  return "It is prime number";
}
var result = isPrime(11);
console.log(result);
