/**
 * Created by Stéphanie on 06/11/2015.
 */
var nb = Number(prompt('Veuillez saisir un nombre'));


for(nb; nb<=10; nb++){
    if(nb % 2 === 0){
        console.log(nb + " est Pair");
    }
    else if(nb % 2 !== 0){
        console.log(nb + " est Impair");
    }
}


var nb = Number(prompt('Veuillez saisir un nombre'));


if(nb % 2 === 0){
    console.log(nb + " est Pair");
}
else if(nb % 2 !== 0){
    console.log(nb + " est Impair");
}
