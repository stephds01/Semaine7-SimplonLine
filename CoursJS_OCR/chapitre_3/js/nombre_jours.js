var mois = Number(prompt("Saisissez un mois en chiffre entre 1 et 12 :"));


if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois ==8 || mois == 10 || mois == 12 ){
    console.log('Le mois ' +mois+ 'comporte 31 jours !' );
}
else if(mois === 2 ){
    console.log('Le mois ' +mois+ 'comporte 28 jours !' );
}
else if(mois == 4 || mois == 6 || mois == 8 || mois ==9 || mois == 11 ){
    console.log('Le mois ' +mois+ 'comporte 30 jours !' );
}
else{
    console.log('Votre chiffre ne correspond pas à un mois !');
}