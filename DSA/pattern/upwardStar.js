function upward(n){

    for(let i = 0;i<n;i++){
        row='';
        for(let j = 0; j<=i;j++){
            row+= '*';
        }
        console.log(row);
    }

}

upward(5)