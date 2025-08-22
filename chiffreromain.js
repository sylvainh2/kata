// entrez ici le nombre à convertir
let entree = 3598;

let nombre_init = entree.toString();
let chiffre, chiffreTraite, modulo, lettre;
let message = "";
let rang = nombre_init.length;
let chiffreMedian = {
    I:"V",
    X:"L",
    C:"D",
    M:""
}
let chiffreRang = {
    1:"I",
    2:"X",
    3:"C",
    4:"M"
}
// si le chiffre est inférieur à 3
function chiffre1a3(chiffre,lettre) {
    for (let i=1; i<=chiffre; i++){
        message += lettre;
    }
}

//si le chiffre est 4 ou 5
function chiffre4a5(chiffre,lettre,rang){
    if (rang<=3 && chiffre===4){
        message += (lettre+chiffreMedian[lettre]);
    }
    if (rang<=3 && chiffre===5){
        message += chiffreMedian[lettre];
    }
    if (rang===4){
        for (let i=1; i<=chiffre; i++){
            message += lettre;
        }
    }

}

for (let i=0; i<nombre_init.length; i++){
    chiffreTraite = nombre_init[i];
    chiffre = parseInt(chiffreTraite);
    modulo = chiffre % 5
    lettre = chiffreRang[rang];
    if ((chiffre/5)>1){
        if (chiffre===9){
            message += (lettre+chiffreRang[rang+1]);
        } else {
            message += chiffreMedian[lettre];
            chiffre1a3(modulo,lettre);
        }
    } else {
        if (chiffre<4){
            chiffre1a3(chiffre,lettre);
        } else {
            chiffre4a5(chiffre,lettre,rang);
        }
    }
    rang -= 1;
}
console.log("resultat de conversion de "+nombre_init+" est "+message);