function upwardNumber(n){
    for(let i =1;i<=n;i++){
        row='';
        for(let j =1;j<=i;j++){
            row+=j;
        }
        console.log(row);
    }
}

upwardNumber(5);