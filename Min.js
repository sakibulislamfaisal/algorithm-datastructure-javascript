const smallestNumber = (number) => {
  var minNum = number[0];
  for (var i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < minNum) {
      minNum = element;
    }
  }
  return minNum;
};

const minimumNumber = smallestNumber([10, 2000, 30, 40, 80, 800]);
console.log("Minimum Number is : ", minimumNumber);

// or using Math property
const arr = [10, 32, 5, 46, 77, 885];
const minimumValue = Math.min(...arr);
console.log("Minimum value : ", minimumValue);
