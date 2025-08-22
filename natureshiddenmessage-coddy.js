let stoneSequence = "ABCDEFGHIJ";
let skipPattern = 3;
let result = "";
for(i=0;i<stoneSequence.length;i++){
    if(i%skipPattern===0)result += stoneSequence[i];
}
console.log(result);