let number = 16;
let convertToBase = "10";
let object ={
    binary:2,
    octal:8,
    decimal:10,
    hexadecimal:16
}
let square = 0;
let power = 0;
let result = [];
square = Math.sqrt(number);
square = square.toString(object[convertToBase] || convertToBase);
result.push(square);
power = number*number;
power = power.toString(object[convertToBase] || convertToBase);
result.push(power);
console.log(result);