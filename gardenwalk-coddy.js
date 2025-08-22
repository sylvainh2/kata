let path = "DDDDDDDDDDDDD";
let initialValue = 100;
let letterCount = 0;
let count = initialValue;
let letterTemp="";
let pass = false;
let objet={
    R:()=> count +=2,
    D:()=> count -=1,
    T:()=> count *=3,
    S:()=> count = Math.floor(count/2),
    X:()=> count = initialValue
}
for(i=0;i<path.length;i++){
    let letter = path[i];
    if(letterTemp!=letter){
        letterCount = 0;
    }
    if(letterCount===0){
        objet[letter]();
    }
    if(letterCount===1 && letter==="D"){
        letterCount = 0;
        letterTemp = "";
        pass = true;
    }
    if(letterCount===1 && letter==="R"){
        objet[letter]();
    }
    if(letterCount===2 && letter==="R"){
        objet[letter]();
        break;
    }
    if((letterCount===0 && !pass) || (letterCount===1 && letter==="R")){
        letterTemp = letter;
        letterCount += 1;
    }
    if(pass)pass = false;
}

console.log(count);