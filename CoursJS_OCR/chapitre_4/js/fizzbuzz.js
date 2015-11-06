/**
 * Created by Stéphanie on 06/11/2015.
 */
for(var nb = 1 ; nb<=100; nb++){

    if(nb % 3 === 0){
       console.log("FIZZ");
    }
    else if( (nb % 5 === 0) && (nb % 3 != 0) ){
        console.log("BUZZ");

    }
    else {
        console.log(nb);
    }

}