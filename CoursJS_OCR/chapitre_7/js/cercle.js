/**
 * Created by Stéphanie on 10/11/2015.
 */
var r = Number(prompt("Entrez le rayon d'un cercle :"));

cercle = {
    perimetre: function(){
        return r * Math.PI * 2;
    },

    aire: function(){
        return Math.PI * ( r * r );
    }
};



console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
