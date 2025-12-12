function middleStars(n){

    for(let i =0;i<n;i++){
        row=" ";
        for(let j=0;j<n-i-1;j++){
            row+=" ";
        }
        for(let k=0;k<2*i+1;k++){
            row+= '*'
        }
        for(let m =0;m<n-i-1;m++){
            row+=' ';
        }
        console.log(row);
    }

}

middleStars(5)