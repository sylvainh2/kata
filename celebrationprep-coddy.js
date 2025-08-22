let binaryNumbers = ["1000", "1010", "1101", "1111"]
let result = [];
let temp =[];
binaryNumbers.map((data)=>{
    result.push(parseInt(data,2))
})
result.sort(function(a,b){return a-b});
console.log(result);