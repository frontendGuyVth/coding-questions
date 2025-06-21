// Q.5. Count how many times each character appears.

function countTheCharacterAppears(str) {
  let finalCount = {}
  for (count of str){
     if(finalCount[count]){
        finalCount[count] += 1;
     } else {
        finalCount[count] = 1;
     }
   //   console.log(finalCount, "final count");
     
  }
  return finalCount
}

console.log(countTheCharacterAppears("jjkj snjfs vyth jvycy 12323 213321"))