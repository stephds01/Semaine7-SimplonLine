/**
 * Created by Stéphanie on 13/11/2015.
 */
//Je crée un tableau films
    var films = [];

//Je crée mon objet Film
var Film = {
    //Initialise le film
    init:function(titre, annee, realisateur){
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire:function(){
      var description = this.titre + ", " + this.annee + ", " + this.realisateur;
        return description;
    }
};




//Créer les films individuellement :

var film1 = Object.create(Film);
film1.init("Le loup de wallStreet", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Peter Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau & Nicolas Benamou");

var film4 = Object.create(Film);
film4.init("Kingdom of even", 2004, "Ridley Scott");

var film5 = Object.create(Film);
film5.init("Casino", 2008, "Martin Scorsese");

var film6 = Object.create(Film);
film6.init("La verité si je mens", 2010, "José Garcia");

//Je pushe les films dans le tab films

films.push(film1);
films.push(film2);
films.push(film3);
films.push(film4);
films.push(film5);
films.push(film6);

//J'affiche la liste des films du tableau films => Attention de ne pas oublié les parentheses de la fonction decrire()
films.forEach(function(film){
    console.log(film.decrire());
});