/**
 * Created by Stéphanie on 08/11/2015.
 */

    //COMPTER NB VOYELLE
//function compterVoyelles(mot) {
//    var nbVoyelles = 0;
//    for (var i = 0; i < mot.length; i++) {
//        var lettre = mot[i].toLowerCase();
//        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') || (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
//            nbVoyelles++;
//        }
//    }
//    return nbVoyelles;
//}
//
//var nbVoyelles = compterVoyelles(mot);
//console.log('Il y a ' + nbVoyelles + ' voyelles et ' + (mot.length - nbVoyelles) + ' consonnes ');


//MOT INVERSER

    //function inverser(mot){
    //
    //    var motInverse = "";
    //
    //    for(var i=0; i<mot.length; i++){
    //        motInverse = mot[i] +  motInverse;
    //    }
    //return motInverse;
    //
    //}

//MOT Palindrome
//var motSaisi = prompt('Entrez un mot');
//
//var motInverse = inverser(motSaisi);
//console.log("Il s'écrit à l'envers " + inverser(motSaisi));
//    if(motSaisi.toLowerCase() === inverser.toLowerCase() ){
//        console.log('Le mot est un palindrome');
//    }
//    else{
//        console.log('Ce mot n\'est pas un palindrome');
//    }

// Conversion en "leet speak"

function convertirEnLeetSpeak(mot) {
    var motleet = "";

    for (var i = 0; i < mot.lenght; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
};


   function trouverLaLettreLeet(lettre){
       var lettreLeet = lettre;
       switch(lettre.toLowerCase()){
           case "a":
               console.log(4);
               break;
           case "b":
               console.log(8);
               break;
           case "e":
               console.log(3) ;
               break;
          case "l":
               console.log(0);
               break;
           default :
               console.log("Cette lettre n'est pas prise en charge");
       }
       return lettreLeet;
    }








console.log(trouverLettreLeet());
//var mot = prompt("Ecrivez un mot :");
//
//var longueurMot = mot.length;
//console.log("Le mot " + mot + " contient " + longueurMot + " caractères");
//console.log("En majuscule, il s'écrit comme cela :" + mot.toUpperCase());
//console.log("En minuscule, il s'écrit comme cela :" + mot.toLowerCase());
//console.log("Il s'ecrit à l'envers : " + inverser(mot));
//console.log(motInverse());


