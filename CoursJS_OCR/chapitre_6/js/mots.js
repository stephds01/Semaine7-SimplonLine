/**
 * Created by Stéphanie on 08/11/2015.
 */
//var mot = prompt("Ecrivez un mot :");

//var longueurMot = mot.length;
//console.log("Le mot " + mot + " contient " + longueurMot + " caractères");
//console.log("En majuscule, il s'écrit comme cela :" + mot.toUpperCase());
//console.log("En minuscule, il s'écrit comme cela :" + mot.toLowerCase());

var mot = prompt("Ecrivez un mot :");

function compterNbVoyelles(mot){
    mot = mot.toLowerCase();    //Je transforme mon mot en minuscule
    var voyelle;
    var consonne;

    //Je boucle autant que la longueur du mot
    for(var i = 0; i<= mot.length; i++){
        console.log(mot[i]);  //1er test 'Les lettres s'affichent'

            //Si le mot est compris entre A et Z alors
            if( (mot[i] > "a") && (mot[i] < "z") ){

                //Je partage entre les voyelles et les consonnes
                var voyelle = mot[i];
                var consonne = mot[i];

                //Si voyelle est égal à 'a,'e,i,o,u,y, alors j'additionne les voyelles
                if(voyelle === "a" && voyelle === "e" && voyelle === "i" && voyelle === "o" && voyelle === "u" && voyelle === "y"){
                    nbVoyelle = voyelle + voyelle;
                    console.log(nbVoyelle);
                }
                //Si consonne est Different de  à 'a,'e,i,o,u,y, alors j'additionne les consonnes
                else if(voyelle != consonne){
                    nbConsonne = consonne + consonne ;
                    console.log(nbConsonne);

                }

            }
            else{
                    return "Désolé, ce mot n'est pas valide !";
            }
    }
    console.log("Le " + mot + " contient " + voyelle + " voyelles, et " + consonne + "consonnes !");

}

console.log(compterNbVoyelles(mot));