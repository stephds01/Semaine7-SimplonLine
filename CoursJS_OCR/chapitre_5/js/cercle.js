/**
 * Created by St�phanie on 08/11/2015.
 */
    var rayon = Number(prompt('Entrez un rayon !'));

    function perimetre(rayon) {
        return 2 * Math.PI * rayon;
    }
    console.log('Le p�rim�tre du cercle est :' + perimetre(rayon));

    function aire(rayon) {
        return Math.PI * (rayon * rayon);
    }
console.log('L\'aire du cercle est :' + aire(rayon));




//Perimetre = 2 * ? * R
//Aire = ? x R�