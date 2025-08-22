let tasselColor = "blue";
let number = "255";
let base = {
    red: 2,
    blue:16,
    green:8
}
let result = "";
let temp = 0;
temp = parseInt(number);
result = temp.toString(base[tasselColor]).toUpperCase()
console.log(result);