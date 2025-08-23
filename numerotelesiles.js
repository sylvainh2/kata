
import fs from 'fs';
let text = "";
let data;

async function lire() {
    data = fs.readFileSync('Test_3.txt');
    return (data.toString())
}

function display(){
    let message="";
    console.log("tableau de sortie");
    for (let y=0; y<hauteur; y++){
        for (let x=0; x<largeur; x++){
            message += array[x][y];
        }
        console.log(message);
        message = "";
    }
}

function rechercheIle(i,j,numeroIle){
    // on regarde la case en dessous
    if ((j+1)<hauteur){
        if(array[i][j+1]==="X"){
            array[i][j+1]=numeroIle.toString();
            rechercheIle(i,j+1,numeroIle);
        }
    }
    //on regarde la case au dessus
    if ((j-1)>0){
        if(array[i][j-1]==="X"){
            array[i][j-1]=numeroIle.toString();
            rechercheIle(i,j-1,numeroIle);
        }
    }
    //on regarde la case de gauche
    if ((i-1)>0){
        if(array[i-1][j]==="X"){
            array[i-1][j]=numeroIle.toString();
            rechercheIle(i-1,j,numeroIle);
        }
    }
    //on regarde la case de droite
    if ((i+1)<largeur){
        if(array[i+1][j]==="X"){
            array[i+1][j]=numeroIle.toString();
            rechercheIle(i+1,j,numeroIle);
        }
    }
}

text = await lire();

let array = [...Array(100)].map(() => Array(100).fill(0));
let numeroIle = 1;

//////////////////////////////////////// transformation fichier en tableau ////////////////////////////

let largeur = 0;
let hauteur = 0;
let largeurMax = 0;
let index = 0;
let tampon = "";
let message = "";

while (index<= text.length) {
    tampon = text[index];
    if (tampon === "." || tampon === "X"){
        array[largeur][hauteur] = tampon;
        message += array[largeur][hauteur]; 
        index +=1;
        largeur +=1;
        if (largeur>largeurMax){
            largeurMax = largeur;
        }
    } else {
        index +=2;
        largeur = 0;
        hauteur +=1;
        console.log(message);
        message = "";
    }
}

//////////////////////////////////// recherche des iles //////////////////////////////////////////////

let caseDepart = "";
let i,j;

largeur = largeurMax;
// hauteur = 5;
for (j=0;j<hauteur;j++){
    for ( i=0;i<largeur;i++){
        caseDepart = array[i][j];
        if(caseDepart === "X"){
            array[i][j] = numeroIle.toString();
            rechercheIle(i,j,numeroIle);
            numeroIle +=1;
        }
        if(caseDepart === "."){
            array[i][j] = ".";
        }
    }
}
display();