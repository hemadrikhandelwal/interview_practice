// Big calculation 

function findTotalDigits(n){
    let count = 0;
    while(n>0){
        let rem = n%10;
        console.log(rem);
        count++;
        n = Math.floor(n/10);
    }

    //note: math.floor as it will be in decimals
    console.log(count);

}

findTotalDigits(7789)

// Direct calculation 
function findTotalDigits(n){
    let count = Math.floor(Math.log10(n)+1);
    console.log(count);
}

/*Time Complexity - O(log base10 (N))
 if you divide my 2 so it will turn to be O(log base2(N))
 if you are writing a logic and number of iteraction is based on division  time complexity will be logritum and 
 you are dividing an number by 10/5/2 
 so its Time complexity will me logbase of that number.*/

