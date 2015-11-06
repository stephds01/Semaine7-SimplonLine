/**
 * Created by Stéphanie on 06/11/2015.
 */

// Avec WHILE

var tour = Number(prompt('Entrez le nombre de tour souhaitez:'));

while(tour <= 10){
    console.log('C\'est le tour' + tour);
    tour++;
}



// Avec FOR

var manege = Number(prompt("Indiquez le nombre de tour de manège:"));

for(manege; manege<=10; manege++){
    console.log("C\'est le tour de manege" + manege);
}
