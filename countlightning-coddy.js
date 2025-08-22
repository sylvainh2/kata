let flashes = "**************************************************";
let count = 0;
let flashesCount = 0;
for(i=0;i<flashes.length;i++){
    if(flashes[i]==="-" && i!=0 && (count>0 && count<5)){
        flashesCount += 1;
        count = 0;
    }
    if(flashes[i]==="-" && i!=0 && count>4){
        count = 0;
    }
    if(flashes[i]==="*" && (count>0 && count<4) && i===flashes.length-1){
        flashesCount +=1;
    }
    if(flashes[i]==="*" && i<flashes.length-1){
        count += 1;
    }
}
console.log(flashesCount)