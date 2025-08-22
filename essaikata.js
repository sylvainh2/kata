let str = "madam";
let numRemove = 1;
let repArray= new Array(26).fill(0); // nombre de repetition de chaque lettre
let posArray= [...Array(26)].map(()=>Array()); // position des lettres
let returnArray = [];
let decimal
let longueur = str.length;
let objet = {};
let comptRemove = 0;
let indexMax = Math.floor(longueur/2);

if (numRemove>longueur){
    objet = {
        isPalindrome:false,
        removedChars:[],
        originalString:str,
        modifiedString:str
    }
    console.log (objet);
} else
if (numRemove===0){
    for(let i=0;i<Math.floor(longueur/2);i++){
        if(str.charAt(i)!=str.charAt(longueur-i-1)){
            objet={
                isPalindrome:false,
                removedChars:[],
                originalString:str,
                modifiedString:str
            }
            break
        } else {
            objet={
                isPalindrome:true,
                removedChars:[],
                originalString:str,
                modifiedString:str
            }          
        }
    }
    console.log (objet);
} else {

// for (let i=0;i<longueur;i++){
//     repArray[str.charCodeAt(i)-97] += 1;
//     posArray[str.charCodeAt(i)-97].push(i);
// }
// decimal =parseFloat("0." + ((longueur/2)+"").split(".")[1]);
// console.log(decimal);

// if(decimal=0)

// console.log(repArray);
// for (let i=0;i<26;i++){
//     posArray[i].map((data)=>console.log(i,data));
// }
// console.log(posArray);


}