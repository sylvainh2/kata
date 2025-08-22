let sights = ["seagull", "seagull", "dolphin"];
let result = {};
sights.map((data)=>{
    if(!result[data]){
        result[data]=1
    }else{
        result[data] +=1;
    }
})
console.log(result)