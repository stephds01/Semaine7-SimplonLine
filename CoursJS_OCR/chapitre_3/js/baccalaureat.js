var moyenne = Number(prompt('Saisissez votre moyenne : '));

if(moyenne < 10){
    console.log('Votre moyenne est de ' + moyenne + ' Dommage, vous �tes RECALE !');
}
else if(moyenne >= 10 && moyenne <=12){
    console.log('Votre moyenne est de ' + moyenne + ' Vous �tes RECU !');
}
else{
    console.log('Votre moyenne est de ' + moyenne + ' Vous �tes RECU avec une MENTION ! ');
}