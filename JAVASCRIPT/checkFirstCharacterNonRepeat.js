// Q.4 First non-repeating character — who stands alone?

function checkFirstNonRepeatChar(str) {
  let stringPara = str.toLowerCase();
  let freqMap = {};

  // create data with repeated counts
  for (let char of stringPara) {
    if (freqMap[char]) {
      freqMap[char] += 1;
    } else {
      freqMap[char] = 1;
    }
  }

  for (let char of stringPara) {
    if (freqMap[char] === 1) {
      return char; // First non-repeating character
    }
  }
  return null;
}


// ANOTHER SOLUTION 
function checkFirstNonRepeatChar(str) {
  let stringPara = str.toLowerCase();

  for (let i = 0; i < stringPara.length; i++) {
    let char = stringPara[i];
    if (stringPara.indexOf(char) === stringPara.lastIndexOf(char)) {
      return char; 
    }
  }

  return null;
}


console.log(checkFirstNonRepeatChar("aabbcdeff"));