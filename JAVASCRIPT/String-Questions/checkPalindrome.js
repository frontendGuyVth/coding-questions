// Q.2 Is it a palindrome? Let's find out.

function isPalindrome(val) {
    let final = ''
    for(let i=val.length-1; i >= 0; i--){
     final += val[i]

    }
    if(final === val) {console.log("Yes, It's Palindrome")} else
        console.log("No, It's Palindrome")
}

isPalindrome("racec")