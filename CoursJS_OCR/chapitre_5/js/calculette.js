/**
 * Created by Stéphanie on 07/11/2015.
 */
// TODO : écrire la fonction calculer()

function calculer(a, b){
    var nb1 = Number(prompt('Entrez le 1 er chiffre :'));
    var operator = (prompt('Entrez l\'opérateur :'));
    var nb2 = Number(prompt('Entrez le 2 eme chiffre :'));;
    var resultat;

    switch(operator){
        case '+':
            resultat = nb1 + nb2;
            break;
        case '-':
            resultat = nb1 - nb2;
            break;
        case '*':
            resultat = nb1 * nb2;
            break;
        case '/':
            resultat = nb1 / nb2;
            break;
        default :
            console.log('Désolé, cette opération n\'est pas prise en charge !');
    }
    console.log(resultat);

}
console.log(calculer());

//console.log(calculer(4, "+", 6)); // Doit afficher 10
//console.log(calculer(4, "-", 6)); // Doit afficher -2
//console.log(calculer(2, "*", 0)); // Doit afficher 0
//console.log(calculer(12, "/", 0)); // Doit afficher Infinity






