let str = "IbelieveIcanfly";
let n = 2;
let result = "";
if(n>0){
    for(i=0;i<str.length;i++){
        let temp = str[i];
        let end = n;
        if(temp.search(/[aeiouAEIOU]/g)>=0){
            end +=1;
        }
        for(j=1;j<=end;j++){
            result += temp;
        }
    }
}
console.log(result);