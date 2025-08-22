    let fishList =["Sardine", "Trout", "Salmon"];
    let object = {
        Sardine:0,
        Trout:1,
        Salmon:2,
        Tuna:3
    }
    let reverseObject = {
        0:"Sardine",
        1:"Trout",
        2:"Salmon",
        3:"Tuna"
    }
    let result = [];
    fishList.map((data)=>{
        result.push(object[data]);
    })
    result.sort();
    result.map((data,index)=>{
        result[index] = reverseObject[data];
    })
    console.log(result)