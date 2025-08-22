let raceResults = "AAAAABBBBBCCCCCDDDDD";
let horses = {};
let result = 0;
for(i=0;i<raceResults.length;i++){
    let temp = raceResults[i];
    if(!horses[temp])horses[temp]=1
    else horses[temp] +=1
}
let horsesArray = Object.keys(horses);
let horsesArrayVal = Object.values(horses);
let max = 0;
for(i=0;i<horsesArrayVal.length-1;i++){
    if(horsesArrayVal[i+1]>horsesArrayVal[max])max=i+1
}
for(i=0;i<raceResults.length;i++){
    if(raceResults[i]===horsesArray[max]){
        result=i;
        break;
    }
}
console.log(result)