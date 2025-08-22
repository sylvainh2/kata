let text = "yenw yessalm #01001000 #01100101 #01101100 #01101100 #01101111";
let temp = "";
let result = ""
let code = text.split(" ");
console.log(code);
code.map((data,index)=>{
    if(data[0]==="#"){
        temp = parseInt(data.slice(1),2)
        result += String.fromCharCode(temp)
        if(index<(code.length-1))result +=" "
    }else{
        for(let i=data.length-1;i>=0;i--){
            result +=data[i];
        }
        if(index<(code.length-1))result +=" "
    }
})
console.log(result);