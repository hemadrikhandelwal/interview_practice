/*
1. Reverse a number 
2. Number has tailing Zero

NOTE :- you just need to multiple the rev number by 10 and need to keep on adding the last digit into it 
*/

function reverseNumber(n){
    rev = 0;
    while(n>0){
        lastDigit= n%10;
        n= Math.floor(n/10);
        rev=(rev*10)+lastDigit;
        
    }
    console.log(rev);
}


// reverseNumber(7789);
reverseNumber(7890);

