function palindromeCheck(n){
    reverseNumber(n);

    if(rev== n){
        console.log(true)
    }
    else{
        console.log(false)
    }

}

function reverseNumber(n){
    rev = 0;
    while(n >0){
        lastDigit = n%10;
        n = Math.floor(n/10);
        rev = (rev*10)+lastDigit
    }
    return rev;
}

palindromeCheck(1331)
palindromeCheck(11)
palindromeCheck(7)
palindromeCheck(123)
palindromeCheck(0)


