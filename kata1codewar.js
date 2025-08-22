const array = ["Alex", "Jacob", "Mark", "Max","Antoine"];
let message="";

if (array.length===0){
    message = "no one likes this";
}
if (array.length===1){
    message = array[0]+" likes this";
}
if ((array.length>=2) && (array.length<4)){
    for (let i=0; i<(array.length-1); i++){
        message += array[i];
        if (i<(array.length-2)){
            message += ", ";
        }
    }
    message += (" and " + array[(array.length-1)]+" likes this");
}
if (array.length>=4){
    message = array[0]+", "+array[1]+" and "+(array.length-2)+" others likes this";
}

console.log(message);