let binaryRecipe = "1010101010";
let ingredients = ["Water", "Herbs", "Sugar", "Salt","Pepper","Honey", "Lemon", "Ginger"];
let result = [];
let temp = parseInt(binaryRecipe,2);
ingredients.map((data,index)=>{
        if(temp%(index+1)===0){
            result.push(index+1);
        }
})
console.log(result);