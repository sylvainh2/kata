    let binaryMessage = "01000001 01000010 0100001";
    let array = [];
    let result = "";
    array = binaryMessage.split(" ");
    array.map((data,index)=>{
        array[index] = String.fromCharCode(parseInt(data,2)+64)
        if(array[index]==="`")array[index]=" ";
    })
    result = array.join("");
    console.log(result);