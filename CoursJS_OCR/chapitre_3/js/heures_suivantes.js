/**
 * Created by Stéphanie on 05/11/2015.
 */
var heures = (prompt('Saisissez une heures :'));
var minutes = (prompt('Saisissez une minutes :'));
var secondes = (prompt('Saisissez une secondes :'));

if( (heures>=0 && heures<=24) && (minutes>=0 && minutes<=59) && (secondes>=0 && secondes<=59) ){
    secondes++;
    if(secondes ===60){
        secondes=0;
        minutes++;
    }
    if(minutes === 60){
        minutes=0;
        heures++;
    }
    if(heures === 24){
        heures = 0;
    }
}
else{
    console.log('Désolé votre format d\'heure n\'est pas valable !');
}

console.log('L\'heure suivante est : ' + heures + ' h ' + minutes + ' m ' + secondes + ' s ')

//14h17m59s => 14h18m0s
//6h59m59s => 7h0m0s
//23h59m59s => 0h0m0s (minuit)