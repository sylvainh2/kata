let birdName = "penguin";
let result = "";
let longueur = birdName.length;
let temp = 0;
let char = "";
for(i=0;i<birdName.length;i++){
    char = birdName[i];
    if(char.search(/[aeiou]/g)===0){
        temp +=1;
    }
}
if(temp===3 || temp===2)result +="1";
else if(temp<2)result = "";
else{
    for(j=4;j<temp;j++){
        if(temp%j===0 && j!=temp){
            char="";
            break;
        }else{
            char="1";
        }
    }
    result += char;
}
if(Math.sqrt(longueur)===Math.floor(Math.sqrt(longueur)))result += "2";
for(i=0;i<(longueur-1)/2;i++){
    if(birdName[i]===birdName[longueur-1-i])char="3";
    else{
        char="";
        break;
    }
}
result += char;
if(result==="")result="0";
console.log(result);