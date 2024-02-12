// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")




document.querySelector("#btn-generate").addEventListener("click", function(){
    
    const resultEl= document.querySelector("#result");

    // input string
    let str = document.querySelector("#word").value;


    str = stringInvert(str);

    console.log(str)

    resultEl.innerText = str;

})



// funzione di inversione stringa
function stringInvert(str){

    let strOutput=[];

    // scorre la stringa dalla posizione massima fino alla minima
    for(let i=str.length-1; i>=0; i--){
        console.log(str[i])
        // nella poosizione j-esima di "strOutput" viene inserita il carattere i-esimo della string "str"
        strOutput.push(str[i]); 
    }

    return strOutput.join('');

}