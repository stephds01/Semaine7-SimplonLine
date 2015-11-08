/**
 * Created by Stéphanie on 07/11/2015.
 */
// Renvoie le carré d'un nombre
function carre(nb) {
    for (var nb = 0; nb <= 10; nb++) {

        var CareDe = nb * nb;
        console.log(CareDe + ' est le carré de ' + nb);

    }
}
    console.log(carre());

//console.log(carre(0)); // Doit afficher 0
//console.log(carre(2)); // Doit afficher 4
//console.log(carre(5)); // Doit afficher 25