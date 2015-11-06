/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombre = Number(prompt('Veuillez trouver un nombre compris entre 1 et 100'));


    for(var i= 1; i <=6; i++) {

        if (nombre < solution) {
            console.log('Votre chiffre est trop petit!');
            nombre = Number(prompt('Veuillez trouver un nombre compris entre 1 et 100'));

        }
        else if (nombre > solution) {
            console.log('Votre chiffre est trop grand!');
            nombre = Number(prompt('Veuillez trouver un nombre compris entre 1 et 100'));
        }
    }
     if (nombre === solution){
        console.log('BRAVO ! la solution était ' + solution );
        console.log(' ! Vous avez trouvez en ' + i + ' essais. ');
    }
    else {
         console.log('Perdu ! La solution était ' + solution);

     }

