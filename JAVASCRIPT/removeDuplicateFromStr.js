// Q.3 - Remove duplicates from a string — efficiently.

function removeDuplicateFromStr(str) {
  let stringPara = str.toLowerCase();  
  let finalStr = "";
  for (let i = 0; i < stringPara.length; i++) {
    if(!finalStr.includes(stringPara[i]))
    finalStr += stringPara[i];
  }
  return finalStr
}

const reverseStr = removeDuplicateFromStr("heeeyyyyyya");
console.log(reverseStr, "DATA");

