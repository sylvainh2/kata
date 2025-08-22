let flowerbed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let newPlants = 5;
let longueur = flowerbed.length;
function isLeftFree(i){
    if(((i-1)<0 || flowerbed[i-1]===0) && flowerbed[i]===0)return(true)
    else return(false)
}
function isRightFree(i){
    if(((i+1)>=longueur || flowerbed[i+1]===0) && flowerbed[i]===0)return(true)
        else return(false)
}
for(i=0;i<longueur;i++){
    if(flowerbed.length===1 && flowerbed[0]===0 && newPlants===1){
        flowerbed[0]=1;
        break;
    }
    let left = isLeftFree(i);
    let right = isRightFree(i);
    if(newPlants>0 && left && right){
        flowerbed[i] = 1;
        newPlants -= 1;
    }
    if(newPlants===0)break;
}
console.log(flowerbed)