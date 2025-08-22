let encodedMessage = "serusaert4saes100";
let result = "";
for(i=encodedMessage.length-1;i>=0;i--){
    let temp = parseInt(encodedMessage[i]);
    if(!temp){
        result += encodedMessage[i].toLowerCase();
    }else if(temp%2===1){
        result += temp.toString();
    }else{
        result += temp.toString(2);
    }
}
console.log(result);