// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


// input string

let str = "ciao";


console.log(stringInvert(str));



// funzione di inversione stringa
function stringInvert(str){

    let strOutput=[];
    j=0;
    // scorre la stringa dalla posizione massima fino alla minima
    for(let i=str.length-1; i>=0; i--){
        console.log(i);
        // nella poosizione j-esima di "strOutput" viene inserita il carattere i-esimo della string "str"
        strOutput[j] = str[i];
        j++;
        console.log(strOutput);
    }

    return strOutput;

}