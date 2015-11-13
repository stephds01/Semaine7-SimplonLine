/**
 * Created by Stéphanie on 12/11/2015.
 */

    //STOCKEZ VOS DONNEES DANS DES TABLEAUX


    //Affiche le nombre d'élement dans le tableau vide
var tableauVide = [];  //Création d'un tableau vide
console.log(tableauVide.length);   //Affiche 0

    //Affiche le nombre d'élement dans le tableau
var films = ["Le loup de wall street", "Vive-versa", "Babysitting"];
console.log(films.length);   //Affiche 3

    //Affiche un element du tableau
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);


    //Parcourir avec FOR
for(vari = 0; i <films.length; i++){
    console.log(film[i]);
}


    //Parcourir un tableau avec FOREACH
films.forEach(function(film){
    console.log(film);
});

    //Ajouter un élément dans un tableau
films.push("Les bronzés");
console.log(films);

/************************************************************/
/***********************************************************/


    //Créer un objet FILM + infos complémentaires
var Film = {
    //Initialise le film
    init: function(titre, annee){
        this.titre = titre;
        this.annee = annee;
    },
    //renvoie de la description du film
    decrire:function (){
        var description = this.titre + " (" + this.annee + ") ";
        return description;
    }
};


var film1 = Object.create(Film);
film1.init("Le loup de Wall Street",2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Les bronzés", 2013);


    //On crée un tableau des differents objets
//Initialise le tableau
var films = [];

//Je pushe les films individuels dans le tableau films
films.push(film1);
films.push(film2);
films.push(film3);

//Je boucle le tableau film pour qu'il me sorte la description !
films.forEach(function(film){
    console.log(film.decrire());
});

