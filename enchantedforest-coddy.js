let path = "TTTMMM/RRRCCC/TTTMMM/RRRCCC/TTTMMM/RRRCCC";
let result = [];
let temp = path.split("/");
let pathTemp = "";
let collected = [];
let move=false;
temp.map((data,index)=>{
    if(index!=0)pathTemp += "/";
    for(let i=0;i<data.length;i++){
        if(data[i]==="C"){
            if(!move)collected.push("C");
            pathTemp += "C";
        }
        if(data[i]==="T" || data[i]==="R"){
            pathTemp += data[i];
            if(data[i]==="R")move=true;
        }
        if(data[i]==="M" && move===true){
            pathTemp +="M";
        }
    }
    move = false;
})
result.push(pathTemp,collected)
console.log(result)