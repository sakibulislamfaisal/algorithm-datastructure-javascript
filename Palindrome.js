const checkPalindrome = (str) => {
  return str == str.split("").reverse().join("");
};
const checkResult = checkPalindrome("madam");
console.log("Palindrome Number is : ", checkResult);
