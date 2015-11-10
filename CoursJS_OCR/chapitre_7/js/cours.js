/**
 * Created by Stéphanie on 10/11/2015.
 */

var stylo = {
    type: "Bille",
    color: "Bleu",
    marque: "Bic"
};

console.log(stylo.type);
console.log(stylo.color);
console.log(stylo.marque);

console.log(stylo['type']);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " est de couleur " + stylo.color);

stylo.color= "ROUGE";

console.log(stylo.color);
stylo.prix = "15€";

console.log(stylo.prix);