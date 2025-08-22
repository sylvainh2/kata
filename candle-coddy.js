let decimalCandles = 3;
let binary = [];
let power = 0;
let temp = decimalCandles;
while(Math.pow(2,power)<=decimalCandles){
    power +=1;
}
power -=1;
while(temp>0 || power>=0){
    if(temp>=Math.pow(2,power)){
        binary.push(1);
        temp -= Math.pow(2,power);
        power -=1;
    }else{
        binary.push(0);
        power -=1;
    }

}
// console.log(binary.join(""))
let result =0;
binary.map((data)=>{
    if(data===1)result +=1
})
console.log(result);
