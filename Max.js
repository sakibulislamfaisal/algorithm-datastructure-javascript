const largestNumber = (number) => {
  var maxNum = number[0];
  for (var i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > maxNum) {
      maxNum = element;
    }
  }
  return maxNum;
};

const maximumNumber = largestNumber([10, 2000, 30, 40, 80, 800]);
console.log("Maximum Number is : ", maximumNumber);

// or using Math property
const arr = [10, 32, 5, 46, 77, 885];
const maximumValue = Math.max(...arr);
console.log(maximumValue);
