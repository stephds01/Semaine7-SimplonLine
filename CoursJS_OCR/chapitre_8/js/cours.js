/**
 * Created by St�phanie on 10/11/2015.
 */
var unObjet = {
    a: 2
};

//Cr�e un AutreObjet avec unObject comme prototype
var unAutreObjet = Object.create(unObjet);


console.log(unAutreObjet.a);   //Affiche 2


//Cr�e encoreUnAutreObjet avec unAutreObjet comme prototype
var encoreUnAutreObjet = Object.create(unObjet);

console.log(encoreUnAutreObjet.a);      //Affiche 2
console.log(encoreUnAutreObjet.b);      //undefined parce qu'il n'esxiste pas !
