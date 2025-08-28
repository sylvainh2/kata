let number = 1;
let result = "";
let resultTemp = "";
let temp = number;
while (temp>1){
    if(temp%2===0)resultTemp += "0";
    else resultTemp +="1";
    temp=Math.floor(temp/2);
}
resultTemp += (temp%2).toString();
for(i=resultTemp.length-1;i>=0;i--){
    result += resultTemp[i];
}
console.log(result);