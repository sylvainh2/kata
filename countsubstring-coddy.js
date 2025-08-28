let str = "ababababab";
let substr = "abab";
let maxLen = 8;
let result ={};
let temp = "";
for(j=0;j<(str.length-substr.length+1);j++){
    for(i=substr.length;i<=maxLen;i++){
        if((i+j)>str.length)continue;
        temp=str.substring(j,j+i);
        console.log(j,i,temp,temp.search(substr));
        if(temp.search(substr)>=0 && substr!=="" && temp.search(/[0-9]/g)<0){
            if(!result[temp])result[temp]=0;
            result[temp]+=1;
        }
    }
}
console.log(result,Object.getOwnPropertyNames(result).length);