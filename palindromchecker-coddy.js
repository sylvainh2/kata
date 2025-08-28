let str = "A man, a plan, a canal: Panama";
let start = 0;
let end = str.length-1;
let result = true;
let temp = "";
for(i=start;i<=end;i++){
    let st = str[i];
    if((st>="a" && st<="z") || (st>="A" && st<="Z") || (st>="0" && st<="9")){
        temp += st.toLowerCase();
    }
}
end = temp.length-1;
while (start<end && result===true){
    if(temp[start]===temp[end]){
        start +=1;
        end -=1;
    }else{
        result = false
    }
}
console.log(result);