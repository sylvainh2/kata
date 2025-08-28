let str = "The train is traveling through the night";
let temp = str.split(" ");
let result = "";
temp.reverse();
temp=temp.join(" ");
for(i=0;i<temp.length;i++){
    if(i%3===0)result += temp[i].toUpperCase();
    else result += temp[i];
}
result += " choo choo!";
console.log(result);