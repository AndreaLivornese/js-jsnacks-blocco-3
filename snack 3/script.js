// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]




// array input
let array=[1,2,3,4,5,6,7];


document.querySelector("#btn-generate").addEventListener("click", function(){

    const str =document.querySelector("#word").value;

    const range1 = Number(document.querySelector("#range1").value);
    const range2 = Number(document.querySelector("#range2").value);

    if((range1 > str.length || range1 < 0) || (range2 > str.length || range2 < 0)){
        alert("valori dei range non validi");

        document.querySelector("#range1").value= "";
        document.querySelector("#range2").value= "";
    }else{

        let subStr=subArray(str, range1, range2) ;

        document.querySelector("#result").innerText= subStr;

    }




})



// funzione che stampa gli elementi dell'array all'interno di un intervallo scelto dall'utente (estremi compresi)

function subArray(arr, a ,b){

    let arrOut=[];

    let min=0, max=0;

    if(a>b){
        max=a;
        min=b;
    }else{
        max=b;
        min=a;
    }

    for(let i=min; i<=max; i++){

        arrOut.push(arr[i]);

    }

    return arrOut.join('');

}