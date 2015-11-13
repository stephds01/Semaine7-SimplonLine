/* 
Activité : gestion des contacts
*/

//Création du prototype Contact:

var Contact = {
    //initialise le contact
    init:function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire:function(){
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

//Je crée mes contacts
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");



//Je crée mon tableau contacts
var contacts = [];


//Je pushe mes contact dans mon tableau contacts
contacts.push(contact1);
contacts.push(contact2);



/*******************************************************************************/
//Affichage du titre
console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1: Lister les contacts");
console.log("2: Ajouter un contact");
console.log("3: Quitter");

var programme = Number(prompt("Choisissez votre programme"));

while(programme !== 3){
    //var programme = Number(prompt("Choisissez votre programme"));


    switch(programme) {
        case 1:
            //Affichage du listage des contacts
            console.log( ("\n\n\n1: Lister les contacts").toUpperCase());
            console.log("\nVoici la liste de tous les contacts");
            //Je boucle mes contacts
            contacts.forEach(function(contact){
                console.log(contact.decrire());
            });
            console.log("\n1: Lister les contacts");
            console.log("2: Ajouter un contact");
            console.log("3: Quitter");

            programme = Number(prompt("Choisissez votre programme"));
            break;
        case 2 :
            //Affichage de l'ajout d'un contact
            console.log( ("\n\n\n2: Ajouter un contact").toUpperCase() );

            //Ajouter un contact
            nom = prompt("Entrez le nom");
            prenom = prompt("Entrez le prénom");

            //Je crée un objet nvxContact
            var nvxContact = Object.create(Contact);
            nvxContact.init(nom,prenom);

            //Je pushe maintenant mon nvxContact dans le tableaux des contacts
            contacts.push(nvxContact);
            //console.log(contacts);

            console.log("\nVotre nouveau contact a été ajouté !");

            //Rajouter un contact

            var oui =  prompt("Ajoutez un nouveau contact: 'OUI' ou 'NON' ");
            oui = oui.toLowerCase();
                 if(oui === "oui"){
                     //Ajouter un contact
                     nom = prompt("Entrez le nom");
                     prenom = prompt("Entrez le prénom");

                     //Je crée un objet nvxContact
                     var nvxContact = Object.create(Contact);
                     nvxContact.init(nom,prenom);

                     //Je pushe maintenant mon nvxContact dans le tableaux des contacts
                     contacts.push(nvxContact);
                     //console.log(contacts);

                     console.log("\nVotre nouveau contact a été ajouté !");
                     //oui =  prompt("Ajoutez un nouveau contact: 'OUI' ou 'NON' ").toLocaleLowerCase();

                 }else {
                     console.log("\n1: Lister les contacts");
                     console.log("2: Ajouter un contact");
                     console.log("3: Quitter");
                     programme = Number(prompt("Choisissez votre programme"));
                 }
        break;

        default:
            //console.log("Votre numéro de programme n'est pas valide !");

    }
    //programme++;

}
console.log("\n\nMerci beaucoup pour votre visite");







