// Big calculation 

function findTotalDigits(n){
    let count = 0;
    while(n>0){
        let rem = n%10;
        console.log(rem);
        count++;
        n = Math.floor(n/10);
    }
    console.log(count);

}

findTotalDigits(7789)

// Direct calculation 
function findTotalDigits(n){
    let count = Math.floor(Math.log10(n)+1);
    console.log(count);
}

