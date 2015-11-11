/**
 * Created by Stéphanie on 10/11/2015.
 */
var unObjet = {
    a: 2
};

//Crée un AutreObjet avec unObject comme prototype
var unAutreObjet = Object.create(unObjet);


console.log(unAutreObjet.a);   //Affiche 2


//Crée encoreUnAutreObjet avec unAutreObjet comme prototype
var encoreUnAutreObjet = Object.create(unObjet);

console.log(encoreUnAutreObjet.a);      //Affiche 2
console.log(encoreUnAutreObjet.b);      //undefined parce qu'il n'esxiste pas !
