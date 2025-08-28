let day = 7;
let result = "";
let object ={
1: "Dive for clams",
2: "Swim in the seaweed forest",
3: "Explore the coral reef",
4: "Play with friendly fish",
5: "Take a nap in a sea cave",
"Other": "Float on the ocean waves",
"three": "Search for a new shell"
}
if(day%3===0){
    result = object["three"];
}else if(day>6 && day%3!==0){
    result = object["Other"];
}else{
    result = object[day];
}
console.log(result);