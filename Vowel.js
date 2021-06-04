const findVowel = (char) => {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    console.log(char, " is vowel ");
  } else {
    console.log(char, " is not vowel");
  }
};

const result = findVowel("e");
// console.log("Vowel is : ", result);
