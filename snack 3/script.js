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

console.log(subArray(array, 2, 5));



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

    return arrOut;

}