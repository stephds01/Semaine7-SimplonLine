/**
 * Created by Stéphanie on 12/11/2015.
 */
//A directive crée un tab mousquetaires
var mousquetaires = ["Athos", "Porthos", "Aramis"];

//Je boucle tant qu'il n'y a plus délement ds le tab
for(var i = 0; i < mousquetaires.length; i++){
    console.log(mousquetaires[i]);
}

//je push un nouveau nom ds le tab
mousquetaires.push("Artagnan");

console.log("A présent, ils sont quatre");
//Je boucle et j'affiche les nom des mousquetaire
for(var i = 0; i < mousquetaires.length; i++){
    console.log(mousquetaires[i]);
}
