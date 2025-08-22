let books =["The Da Vinci Code", "The Lost Symbol", "Angels & Demons", "Inferno", "Origin"];
let startIndex = 1;
let endIndex = 3;
let temp = books.slice(startIndex,endIndex+1);
temp.sort();
books.splice(startIndex,(endIndex+1-startIndex));
temp.map((data,index)=>{
    books.splice(startIndex+index,0,data)
})
console.log(books)