    let shells = [];
    let commands = [];
    let result;
    if(shells){
        result = shells.slice();
    }
    commands.map((data)=>{
        if(data>0){
            result.push(data)
        }
        if(data<0 && Math.abs(data)===result[result.length-1]){
            result.pop();
        }
    })
    console.log(result);