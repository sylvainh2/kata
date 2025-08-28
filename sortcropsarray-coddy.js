let cropsArray = [8, 5, 2, 11, 13, 9, 7, 4, 1, 6, 10, 3];
let result =[];
let i=0;
for(i=0;i<cropsArray.length;i++){
    if(cropsArray[i]!==13)result.push(cropsArray[i]);
    else break;
}
result.sort(function(a, b) {
    return a - b;
})
result =result.concat(cropsArray.slice(i));
console.log(result);