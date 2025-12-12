function downwardStar(n){
    for(let i =0;i<n;i++){
        row='';
        for(let j = n-i;j>0;j--){
            row+= '*'
        }
        console.log(row);
    }

}

downwardStar(5)
