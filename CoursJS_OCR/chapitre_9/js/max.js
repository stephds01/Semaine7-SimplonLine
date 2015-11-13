/**
 * Created by Stéphanie on 12/11/2015.
 */
//Je declare un tab
var valeurs = [11, 3, 7, 2, 9,10];

//Je crée une valeur max avec comme indice 0 du tab
var max = valeurs[0];

//Je boucle tant qu'il a des element
for(var i = 1; i< valeurs.length; i++){
    //j'affiche si le i de tab valeurs et superieur à max
    if(valeurs[i]> max){
        console.log(valeurs[i]);
    }
    else{
        console.log("Le maximum des éléments vaut : " + valeurs[0]);
    }
}

