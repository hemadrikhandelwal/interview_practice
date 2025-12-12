function upwardNumnbers(n){
    for(let i=1;i<=n;i++){
        row='';
        for(let j =1;j<=i;j++){
            row+= i;
        }
        console.log(row);
    }
}

upwardNumnbers(5)