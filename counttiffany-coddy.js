    let num = 3;
    let result =  0;
    let temp = num.toString(2);
    for(i=0;i<temp.length;i++){
        if(temp[i]==="1")result +=1;
    }
    console.log(result);