let locations = ["park","church","tree","church"];
let object = {
    "tree":3,
    "park":1,
    "church":0
}
let result = 0;
locations.map((data)=>{
    result += object[data];
})
console.log(result);