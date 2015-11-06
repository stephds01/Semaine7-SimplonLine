/**
 * Created by Stéphanie on 06/11/2015.
 */

var nbre = Number(prompt("Entrez un nombre"));
console.log('Voici la table de multiplication de :'+ nbre);



while(nbre>=2 && nbre<=9) {
    var i;
    for (i = 1; i <= 10; i++) {
        var multiplication = nbre * i;
        console.log(nbre + ' x ' + i + ' = ' + multiplication);
    }
    nbre++;
}
