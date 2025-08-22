    let field = "s..s..s";
    let position = 0;
    let tampon = "";
    let result = 0;
    if(field.length<=1){result=0}
    else {
        while(position<(field.length-1)){
        tampon = field[position];
        if(tampon!=field[position+1]){result +=1}
        position +=1;
        }
    }
    console.log (result)