let str = "This is definitely not a palindrome, but it's a longer string to test";
let temp = "";
let strTemp = "";
let result = "";
for(i=0;i<str.length;i++){
    temp = str[i];
    if((temp>="a" && temp<="z") || (temp>="A" && temp<="Z"))strTemp += temp.toLowerCase();
}
for(i=0;i<(strTemp.length-1)/2;i++){
    if(strTemp[i]!==strTemp[strTemp.length-1-i]){
        result = "You are safe from palindrome monsters... for now.";
        break;
    }else{
        result = "Beware, a palindrome monster is near!";
    }
}
console.log(result);