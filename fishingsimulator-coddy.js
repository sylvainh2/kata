let fishingSpot = "Sunny Creek";
let patience = 7;
let result = "";
for(i=1;i<=patience;i++){
    if(i%15===0){
        if(result!=="")result +=" ";
        result += "fishberry";
        break;
    }else if(i%5===0){
        if(result!=="")result +=" ";
        result += "salmon";
    }
    else if(i%3===0){
        if(result!=="")result +=" ";
        result += "trout";
    }
    else {
        if(result!=="")result +=" ";
        result += "old boot";
    }
}
console.log("I spent a peaceful day fishing at "+fishingSpot+". i caught: "+result)