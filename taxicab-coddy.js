let distances = [1];
let baseFare = 60;
let reverseArray = [];
let sum;
reverseArray = (distances.slice()).reverse();
reverseArray.map((data)=>{
    if(!sum)sum=0;
    sum =data + sum;
})
sum *= 10;
sum += baseFare;
console.log(sum);