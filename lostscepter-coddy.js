let inscription = "day, night, day, night, day";
let array = [];
let dayCount = 0;
let nightCount = 0;
array = inscription.split(" ");
array.map((data,index)=>{
    if(array[index][data.length-1]===","){
        array[index]=data.slice(0,data.length-1)
    }
    if(array[index]==="day")dayCount +=1
    else nightCount +=1;
})
if(dayCount>nightCount)result="West Wing"
else if(dayCount===nightCount)result="Central Chamber"
else result="East Wing"
console.log(result);