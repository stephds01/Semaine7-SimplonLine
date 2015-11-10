/**
 * Created by Stéphanie on 10/11/2015.
 */
//var montant = Number(prompt('Saisir le montant :'));

var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function(montant){
        this.solde = this.solde + credit;
    },
    debiter: function(montant){
        this.solde = this.solde - debit;
    },
    decrire: function(){
        var description = "Titulaire : " + this.titulaire + " , solde : " + this.solde + " Euros";
        return description;
    }

};
console.log(compte.decrire());

var credit = Number(prompt('Saisir un montant de credit : '));
console.log(compte.crediter(credit));

var debit = Number(prompt('Saisir un montant de credit : '));
console.log(compte.debiter(debit));

console.log(compte.decrire());
