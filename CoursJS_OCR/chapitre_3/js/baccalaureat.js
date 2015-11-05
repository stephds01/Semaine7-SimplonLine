var moyenne = Number(prompt('Saisissez votre moyenne : '));

if(moyenne < 10){
    console.log('Votre moyenne est de ' + moyenne + ' Dommage, vous êtes RECALE !');
}
else if(moyenne >= 10 && moyenne <=12){
    console.log('Votre moyenne est de ' + moyenne + ' Vous êtes RECU !');
}
else{
    console.log('Votre moyenne est de ' + moyenne + ' Vous êtes RECU avec une MENTION ! ');
}