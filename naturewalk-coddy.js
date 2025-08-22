let photos = ["photo10","photo11","photo12"];
let tags = ["forest","forest","lake"];
let dictionnary ={}
let result={};

tags.map((data,index)=>{
    let photo = photos[index];
    if(result[data])result[data].push(photos[index])
    else{
    dictionnary = {[data]:[`${photo}`]}
    result = {...result,...dictionnary}
    }
})
console.log(result)