// Q.1 Reverse a string — without using built-ins.

function reverseStr(str) {
  let finalStr = "";
  for (let a = str.length-1; a >= 0; a--) {
    finalStr += str[a];
  }
  return finalStr;
};

console.log(reverseStr("nana"))

// with using of build-in methods

const str = "heydaya"

const reverseString = str.split('').reverse('.').join('')
console.log(reverseString);
