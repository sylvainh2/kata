let flowerNames = ["rose", "tulip", "daisy", "lily", "orchid"];
let separator = " , ";
let colors = ["red", "yellow", "pink", "blue", "purple"];
let result = "";
flowerNames.map((data,index)=>{
    result += colors[index%colors.length]+" "+data;
    if(flowerNames.length>1 && index<flowerNames.length-1)result +=separator;
})
console.log(result);