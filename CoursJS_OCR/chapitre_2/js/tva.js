/**
 * Created by Stéphanie on 05/11/2015.
 */
var ht = Number(prompt("Veuillez saisir un montant Hors taxe :"));

var tva = ht *(19.6/100);
var tvaTotal = ht + tva;

alert("Le prix TTC est de "+ tvaTotal + " euros");