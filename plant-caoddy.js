    let cellIntegrity = [49,50,51,75,25];
    let pestPresence = [true,false,true,false,false];
    let result = [];
    cellIntegrity.map((data,index)=>{
        if(data>75 && pestPresence[index]===false){
            result.push('Healthy');
        }else
        if(data>=50 && data<=75 || pestPresence[index]===true){
            result.push('At Risk');
        }else
        if(data<50 && pestPresence[index]===false){
            result.push('Unhealthy');
        }
    })
    console.log(result);