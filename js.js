//Wednesday: Factorialize!

//1. Factorialize a Number
function factorialize(n){
    if (n<1) {
        return 1;
    }
    let result=1;
    for (let i=1;i<=n;i++){
        result*=i;
    }
    return result;
}

console.log(factorialize(10));