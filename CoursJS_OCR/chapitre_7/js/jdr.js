/**
 * Created by Stéphanie on 10/11/2015.
 */

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie et  " + this.force + " en force " + this.xp + " est l'experience.";
        return description;
    }
};

//Aurora reçoit une fleche -20
perso.sante = perso.sante - 20;

//Aurora trouve un bracelet +10;
perso.force = perso.force + 10;

//Ajout d'une propriété expérience à o
perso.xp = 0;

perso.sante = perso.sante - 20;
perso.force = perso.force + 10;
perso.xp = perso.xp + 15;
perso.sante = perso.sante + 20;
perso.force = perso.force -10;


//console.log(perso.nom + " a " + perso.sante +  " point de vie et " + perso.force + " en force");
console.log(perso.decrire());
