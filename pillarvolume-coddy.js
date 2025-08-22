let pillarHeight=11;
let pillarWidth=11;
let pillarDepth=11;
let result = "";
let double = true;
let volume = pillarHeight*pillarWidth*pillarDepth;
volume = volume.toString();
let longueur = volume.length;
for(i=0;i<=Math.floor(longueur/2);i++){
    if(volume[i]!==volume[longueur-1-i]){
        double=false;
        break;
    }
}
if(double)result=volume+volume;
else result=volume;
console.log(result)