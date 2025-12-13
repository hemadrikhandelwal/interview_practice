function printAllDivision(n){

    let output = [];
    for(let i =1;i<=n;i++){
        if(n%i == 0){
            output.push(i);
        }
    }
    console.log(output);

}

printAllDivision(36)
// Time complexity is O(n)