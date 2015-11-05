var nombre1 = 5;
var nombre2 = 3;

var c = nombre1;
nombre1 = 3;
nombre2 = c;

console.log(nombre1);  //Doit afficher 3
console.log(nombre2);  //Doit afficher 5
