let garden = ["roses", "tulips", "dandelions", "sunflowers", "violets", "daisies", "daffodils", "lilies", "orchids"];
let flower = "roses";
let result = 0;
result = garden.findIndex((el)=>el===flower);
console.log(result);