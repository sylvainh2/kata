let right=1;
let left=-1;
function serpentPath(gardenLength, directionChanges) {
    // Write code here
    let position = 0;
    let result =new Array(gardenLength).fill(0);
    if(gardenLength<=1)result=[]
    else{
        result[0]=1;
        directionChanges.map((data)=>{
            position +=data;
            result[position] +=1;
        })
    }
    console.log(result);

}

serpentPath(3,[right,left])