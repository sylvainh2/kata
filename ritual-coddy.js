    let ritualText = "AZBYC XYZABC DEAFZ GHIZJ KLMZNOP QRSTUVWXYZA AZBYC XYZABC DEAFZ GHIZJ KLMZNOP QRSTUVWXYZA";
    let result = [];
    let tampon = "";
    let tamponFlag = false;
    let lettre = "";
    let position = 0;
    let longueur = ritualText.length
    while(position<longueur){
        lettre = ritualText[position];
        if(lettre==="A" && tamponFlag===false){
            tampon = "Z";
            tamponFlag = true;
        }
        if(lettre==="Z" && tamponFlag===true){
            tampon += "A";
            result.push(tampon);
            tamponFlag = false;
        }
        if(lettre===" "){
            tampon = "";
            tamponFlag = false;
        }
        if(lettre != "A" && tamponFlag===true){
            tampon += lettre;
        }
        position +=1;
    }
    console.log(result);