let path = "EW";
let inventory = ["torch"];
let temp = "";
let result = [];
for(i=path.length-1;i>=0;i--){
    temp += path[i];
}
inventory.reverse();
result.push(temp,inventory)
console.log(result);