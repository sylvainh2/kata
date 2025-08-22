let message = "In the {0} rainforest, I found a {1} bottle containing a {2}!";
let words = ["lush", "small", "mysterious"];
let position = 0;
let indexArray = 0;
let wordPosition = words.length-1;
while(wordPosition>=0){
    let temp = message.replace(("{"+indexArray+"}"),words[wordPosition]);
    if(temp){
        message = temp;
        indexArray +=1;
        wordPosition -=1
    }else{
        wordPosition = -1;
    }
}
console.log(message);