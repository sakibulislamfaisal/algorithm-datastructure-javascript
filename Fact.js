const findFactorial = (num) => {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};
const result = findFactorial(4);
console.log("Factorial Value is : ", result);

//using recursion to solve the same problem

const findRecursiveFactorial = (number) => {
  if (number == 1) return number;
  else {
    return number * findRecursiveFactorial(number - 1);
  }
};
const factResult = findRecursiveFactorial(5);
console.log("Factorial value is : ", factResult);
