    let plantName ="pinkDaisy";
    let tempPlant = [];
    let first = "";
    let rest = "";
    let result = [];
    tempPlant = plantName.split(" ");
    tempPlant.map((data)=>{
        first = (data[0]).toUpperCase();
        rest = (data.slice(1,data.length)).toLowerCase();
        result.push(first+rest);
    })
    console.log(result.join(" "));