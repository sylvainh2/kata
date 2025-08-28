let signText = "";
let borderWidth = 1;
let temp = "";
let tempSpace = "";
let tempAster = "";
let result = "";
for(i=signText.length-1;i>=0;i--){
    temp += signText[i];
}
for(i=1;i<=borderWidth;i++){
    tempSpace +=" ";
}
result = tempSpace+temp+tempSpace;
for(i=0;i<result.length;i++){
    tempAster +="*";
}
result = tempAster+result+tempAster;
console.log(result);