let n = 30;
let result = "";
for(i=1;i<=n;i++){
    if(i%15===0)result +="b"
    else if(i%5===0)result +="r"
    else if(i%3===0)result +="d"
    else result +="*"
}
console.log(result);