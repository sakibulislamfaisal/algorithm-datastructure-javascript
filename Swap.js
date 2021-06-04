const findSwapNumber = () => {
  var a = 10;
  var b = 20;
  console.log("Before Swap Number : ", " a is : ", a, " and b is : ", b);
  var temp = a;
  a = b;
  b = temp;
  console.log("After Swap Number : ", " a is : ", a, " and b is : ", b);
};
findSwapNumber();
