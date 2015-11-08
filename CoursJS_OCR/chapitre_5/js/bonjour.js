/**
 * Created by Stéphanie on 07/11/2015.
 */
//
//// Renvoie un message de bienvenue
//function direBonjour(prenom, nom) {
//    var message = "Bonjour, " + prenom + " " + nom + " !";
//    return message;
//}
//
//// TODO : faire saisir le prénom et le nom de l'utilisateur
//// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat


function direBonjour(prenom, nom){
    var prenom = prompt("Entrez votre Prénom :");
    var nom = prompt('Entrez votre nom :');
    var message = 'Bonjour, ' + prenom + nom + ' !';

    return message;
}

console.log(direBonjour('Alfredo', 'DESA'));
