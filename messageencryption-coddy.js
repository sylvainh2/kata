let message = "Encryption is cool";
let key = 8;
let sequence = [1,2,3,4];
let longueur = message.length-1;
let reverseTemp = [];
let reverseCode = [];
let position = 0;
let longueurSequence = sequence.length-1;
let result = "";
for(i=0;i<=longueur;i++){
    reverseTemp.push(message[longueur-i])
    reverseCode.push(reverseTemp[i].charCodeAt(0))
}
reverseCode.map((data)=>{
    data *= sequence[position];
    data += key;
    position +=1;
    if(position>longueurSequence)position=0
    result += String.fromCharCode(data);
})
console.log(result);