let hobbies = ["Chess", "drawing", "swimming"];
let category = 2;
let result = "";
let object = {
    1: "Outdoor hobbies: ",
    2: "Indoor hobbies: ",
    3: "Creative hobbies: ",
    "other": "Unknown hobby category"  
}
let temp = hobbies.reverse().join(", ");
if(category<1 || category>3)result = object["other"];
else result = object[category]+temp;
// switch (category){
//     case 1: result = "Outdoor hobbies: "+temp
//     break;
//     case 2: result = "Indoor hobbies: "+temp
//     break;
//     case 3: result = "Creative hobbies: "+temp
//     break;
//     default: result = "Unknown hobby category"
// }
console.log(result);