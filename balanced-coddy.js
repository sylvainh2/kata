let  arr = [1, 2, 3];
let condition = 2;
let str = "abc";
let newStr = "";
let longueur = arr.length-1;
let longueurStr = str.length-1;
let temp = "";
let result = {};
arr.map((data,index)=>{
    if(data>condition)arr[index]=arr[longueur-index]
})
for(let i=0;i<=longueurStr;i++){
    newStr += str[longueurStr-i];
}
for(let i=0;i<=longueurStr;i++){
    letter = str[i];
    if(letter>="a" && letter<="m")temp +=newStr[i].toUpperCase()
    else temp +=newStr[i].toLowerCase()
}
result = {"array":arr,"string":temp};

console.log(result);