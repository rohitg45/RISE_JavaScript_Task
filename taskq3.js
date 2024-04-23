console.log("Hello")

const calAvg = function(arr)
{
    let sum=0;
    for(let i=0; i< arr.length; i++){
        sum+= arr[i];
    }
    return Math.round(sum/arr.length);
}

const dolphins= [97,112,101];
const dolphinsAvg = calAvg(dolphins);
console.log(dolphinsAvg);

const koalas= [109,95,123];
const koalasAvg = calAvg(koalas);
console.log(koalasAvg);

if((dolphinsAvg==koalasAvg) && (dolphinsAvg>=100 && koalasAvg>=100)){
    console.log("It's a draw")
}
else if(dolphinsAvg>koalasAvg && dolphinsAvg>=100){
    console.log("Winners are team dolphins")
}
else if(dolphinsAvg<koalasAvg && koalasAvg>=100){
    console.log("Winners are team koalas")
}
else{
    console.log("No team had won")
}