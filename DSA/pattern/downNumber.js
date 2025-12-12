function downNumber(n){

    for(let i =0;i<=n;i++){
        row= '';
        for(let j = 1;j<=n-i;j++){
            row+= j;
        }
        console.log(row);
    }

}
downNumber(5)